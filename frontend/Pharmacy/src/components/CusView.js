/* eslint-disable react/jsx-no-duplicate-props */
import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

//report
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = feeDetails=> {

    const doc = new jsPDF();
    const tableColumn = ["Medicine Name", "Code Number", "Section","Description","Quantity","Price"];
    const tableRows = [];
   

    feeDetails.map(Fee => {
        const FeeData = [
            Fee.Mname,
            Fee.codeNum,
            Fee.section,
            Fee.des,
            Fee.quantity,
            Fee.price,
             
        ];
        tableRows.push(FeeData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Medicine Details Report.pdf");
};

const TuitionFeeDetail = props =>(
    <tr>
        <td>{props.feeDetails.Mname}</td>
        <td>{props.feeDetails.codeNum}</td>
        <td>{props.feeDetails.section}</td>
        <td>{props.feeDetails.des}</td>
        <td>{props.feeDetails.quantity}</td>
        <td>{props.feeDetails.price}</td>
        
     
        {/*<td >

        <Link to ={"/updateTuitionFee/"+props.feeDetails._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteTuitionFee(props.feeDetails._id)}}>Delete</a></td>
        */}
     
      </tr>
)

export default class DisplayTuitionFee extends Component{
    constructor(props){
        super(props);

        this.DeleteTuitionFee = this.DeleteTuitionFee.bind(this);
        this.state = {feeDetails: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/MedDetails/')
        .then(response => {
            this.setState({feeDetails: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    DeleteTuitionFee(id){
        axios.delete('http://localhost:8070/MedDetails/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Medicine Details deleted successfully!","success")
        this.setState({
            feeDetails: this.state.feeDetails.filter(el => el._id !== id)
        })
    }

    //search
    filterData(feeDetails,searchKey){

        const result = feeDetails.filter((Fee)=>

        Fee.Mname.toLowerCase().includes(searchKey)||
        Fee.codeNum.toLowerCase().includes(searchKey)||
        Fee.section.toLowerCase().includes(searchKey)||
        Fee.des.toLowerCase().includes(searchKey)||
        Fee.quantity.toLowerCase().includes(searchKey)||
        Fee.price.toLowerCase().includes(searchKey)
       
        )

        this.setState({feeDetails:result})

    }

    handleSearchArea = (e) =>{
          const searchKey = e.currentTarget.value;
          axios.get('http://localhost:8070/MedDetails/').then(res =>{

            this.filterData(res.data,searchKey)
        });

      }

    CurrentTuitionFeeTable(){
        return this.state.feeDetails.map(currentexercise => {

            return <TuitionFeeDetail feeDetails={currentexercise} DeleteTuitionFee={this.DeleteTuitionFee} key={currentexercise._id}/>

        })

    }

    

   render(){
       return (
            <div>
                <div class="mt-20 ...">
            <center><b><h3>Medicine Details</h3></b></center>
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
                       <th>Medicine Name</th>
                       <th>Code Number</th>
                       <th>Section</th>
                       <th>Description</th>
                       <th>Quantity</th>
                       <th>Price</th>

                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentTuitionFeeTable()  }
                       </tbody>
               </table>
           </div>
           <a href="/OrderMedd" class="appointment-btn scrollto"><span class="d-none d-md-inline">Order</span> Medicine</a>
           </div>
           </div>
       )
   }
}