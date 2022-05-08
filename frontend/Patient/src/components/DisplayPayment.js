import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

//report
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = PaymentDetails=> {

    const doc = new jsPDF();
    const tableColumn = ["PaymentID", "Patient name", "Phone no","Email","Doctor","Gender","PaymentDate","PaymentType","Amount"];
    const tableRows = [];
   

    PaymentDetails.map(Fee => {
        const FeeData = [
            Fee.PaymentID,
            Fee.Patientname,
            Fee.Phoneno,
            Fee.Email,
            Fee.Doctor,
            Fee.Sex,
            Fee.PaymentDate,
            Fee.PaymentType,
            Fee.Amount,
          
             
        ];
        tableRows.push(FeeData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Fee Details Report.pdf");
};

const PaymentDetails = props =>(
    <tr>
        <td>{props.PaymentDetails.PaymentID}</td>
        <td>{props.PaymentDetails.Patientname}</td>
        <td>{props.PaymentDetails.Phoneno}</td>
        <td>{props.PaymentDetails.Email}</td>
        <td>{props.PaymentDetails.Doctor}</td>
        <td>{props.PaymentDetails.Sex}</td>
        <td>{props.PaymentDetails.PaymentDate}</td>
        <td>{props.PaymentDetails.PaymentType}</td>
        <td>{props.PaymentDetails.Amount}</td>
       
        
     
        {/*<td >

        <Link to ={"/updateTuitionFee/"+props.PaymentDetails._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteTuitionFee(props.PaymentDetails._id)}}>Delete</a></td>
        */}
      <td>
             <a className="btn btn-warning" href={`/updateTuitionFee/${props.PaymentDetails._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeleteTuitionFee(props.PaymentDetails._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
      </td>
      </tr>
)

export default class DisplayPayment extends Component{
    constructor(props){
        super(props);

        this.DeleteTuitionFee = this.DeleteTuitionFee.bind(this);
        this.state = {PaymentDetails: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/PaymentDetails/')
        .then(response => {
            this.setState({PaymentDetails: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    DeleteTuitionFee(id){
        axios.delete('http://localhost:8070/PaymentDetails/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Appointment deleted successfully!","success")
        this.setState({
            PaymentDetails: this.state.PaymentDetails.filter(el => el._id !== id)
        })
    }

    //search
    filterData(PaymentDetails,searchKey){

        const result = PaymentDetails.filter((Fee)=>

        Fee.PaymentID.toLowerCase().includes(searchKey)||
        Fee.Patientname.toLowerCase().includes(searchKey)||
        Fee.Phoneno.toLowerCase().includes(searchKey)||
        Fee.Email.toLowerCase().includes(searchKey)
       
        )

        this.setState({PaymentDetails:result})

    }

    handleSearchArea = (e) =>{
          const searchKey = e.currentTarget.value;
          axios.get('http://localhost:8070/PaymentDetails/').then(res =>{

            this.filterData(res.data,searchKey)
        })

      }

    CurrentTuitionFeeTable(){
        return this.state.PaymentDetails.map(currentexercise => {

            return <PaymentDetails PaymentDetails={currentexercise} DeleteTuitionFee={this.DeleteTuitionFee} key={currentexercise._id}/>

        })

    }

    

   render(){
       return (
            <div>
                <div class="mt-20 ...">
            <center><b><h3>Payments</h3></b></center>
            </div>
           <div  className = "container" className="m-20 mt-3 ... ">
               <div className="container">
            <div className="row">
            <div className="col-lg-9 mt-2 mb-2"/>
            <div className="col-lg-3 mt-2 mb-2">

            <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>                                
            </input>
            </div>
            </div>
               
               <table  className="table" className="table table-hover" style={{backgroundColor:"rgb(200,200,200,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}}>
                   <thead className="thead-light">
                       <tr>
                       <th>Payment ID</th>
                       <th>Patient name</th>
                       <th>Phone no</th>
                       <th>Email</th>
                       <th>Doctor</th>
                       <th>Gender</th>
                       <th>Payment Date</th>
                       <th>Payment Type</th>
                       <th>Amount</th>
                      

                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentTuitionFeeTable()  }
                       </tbody>
               </table>
           </div>
           <div className="button" className="mb-2 mr-8 ml-2 float-right ..."> 
         <button type ="button" class = "btn btn-secondary btn-sm" onClick={()=> generatePDF(this.state.PaymentDetails)}>Generate Report</button>
        </div>
           </div>
           </div>
       )
   }
}