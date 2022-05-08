import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

//report
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = feeDetails=> {

    const doc = new jsPDF();
    const tableColumn = ["PaymentID", "Patient name", "Phone no","Email","Province","Gender","Birthday","Blood Type","Patient History"];
    const tableRows = [];
   

    feeDetails.map(Fee => {
        const FeeData = [
            Fee.PaymentID,
            Fee.Patientname,
            Fee.Phoneno,
            Fee.Email,
            Fee.Province,
            Fee.Sex,
            Fee.Birthday,
            Fee.BloodType,
            Fee.Phistory,
          
             
        ];
        tableRows.push(FeeData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Fee Details Report.pdf");
};

const PaymentFeeDetail = props =>(
    <tr>
        <td>{props.feeDetails.PaymentID}</td>
        <td>{props.feeDetails.Patientname}</td>
        <td>{props.feeDetails.Phoneno}</td>
        <td>{props.feeDetails.Email}</td>
        <td>{props.feeDetails.Province}</td>
        <td>{props.feeDetails.Sex}</td>
        <td>{props.feeDetails.Birthday}</td>
        <td>{props.feeDetails.BloodType}</td>
        <td>{props.feeDetails.Phistory}</td>
       
        
     
        {/*<td >

        <Link to ={"/updatePaymentFee/"+props.feeDetails._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeletePaymentFee(props.feeDetails._id)}}>Delete</a></td>
        */}
      <td>
             <a className="btn btn-warning" href={`/updatePaymentFee/${props.feeDetails._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeletePaymentFee(props.feeDetails._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
      </td>
      </tr>
)

export default class DisplayPayFee extends Component{
    constructor(props){
        super(props);

        this.DeletePaymentFee = this.DeletePaymentFee.bind(this);
        this.state = {feeDetails: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/feeDetails/')
        .then(response => {
            this.setState({feeDetails: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    DeletePaymentFee(id){
        axios.delete('http://localhost:8070/feeDetails/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Patient deleted successfully!","success")
        this.setState({
            feeDetails: this.state.feeDetails.filter(el => el._id !== id)
        })
    }

    //search
    filterData(feeDetails,searchKey){

        const result = feeDetails.filter((Fee)=>

        Fee.PaymentID.toLowerCase().includes(searchKey)||
        Fee.Patientname.toLowerCase().includes(searchKey)||
        Fee.Phoneno.toLowerCase().includes(searchKey)||
        Fee.Email.toLowerCase().includes(searchKey)
       
        )

        this.setState({feeDetails:result})

    }

    handleSearchArea = (e) =>{
          const searchKey = e.currentTarget.value;
          axios.get('http://localhost:8070/feeDetails/').then(res =>{

            this.filterData(res.data,searchKey)
        })

      }

    CurrentPaymentFeeTable(){
        return this.state.feeDetails.map(currentexercise => {

            return <PaymentFeeDetail feeDetails={currentexercise} DeletePaymentFee={this.DeletePaymentFee} key={currentexercise._id}/>

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
                       <th>Province</th>
                       <th>Gender</th>
                       <th>Birthday</th>
                       <th>Blood Type</th>
                       <th>Patient history</th>
                      

                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentPaymentFeeTable()  }
                       </tbody>
               </table>
           </div>
           <div className="button" className="mb-2 mr-8 ml-2 float-right ..."> 
         <button type ="button" class = "btn btn-secondary btn-sm" onClick={()=> generatePDF(this.state.feeDetails)}>Generate Report</button>
        </div>
           </div>
           </div>
       )
   }
}