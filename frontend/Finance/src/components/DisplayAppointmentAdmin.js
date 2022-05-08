import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

//report
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = AppDetails=> {

    const doc = new jsPDF();
    const tableColumn = ["PatientID", "Patient name", "Phone no","Email","Doctor","visited","SelectDate","Time","Comment"];
    const tableRows = [];
   

    AppDetails.map(Fee => {
        const FeeData = [
            Fee.PatientID,
            Fee.Patientname,
            Fee.Phoneno,
            Fee.Email,
            Fee.Doctor,
            Fee.visited,
            Fee.SelectDate,
            Fee.Time,
            Fee.Comment,
          
             
        ];
        tableRows.push(FeeData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Fee Details Report.pdf");
};

const AppointmentAppDetail = props =>(
    <tr>
        <td>{props.AppDetails.PatientID}</td>
        <td>{props.AppDetails.Patientname}</td>
        <td>{props.AppDetails.Phoneno}</td>
        <td>{props.AppDetails.Email}</td>
        <td>{props.AppDetails.Doctor}</td>
        <td>{props.AppDetails.visited}</td>
        <td>{props.AppDetails.SelectDate}</td>
        <td>{props.AppDetails.Time}</td>
        <td>{props.AppDetails.Comment}</td>
       
        
     
        {/*<td >

        <Link to ={"/updateAppintment/"+props.AppDetails._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteAppointmentFee(props.AppDetails._id)}}>Delete</a></td>
        */}
      <td>
             <a className="btn btn-warning" href={`/updateAppintment/${props.AppDetails._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeleteAppointmentFee(props.AppDetails._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
      </td>
      </tr>
)

export default class DisplayAppointmentFee extends Component{
    constructor(props){
        super(props);

        this.DeleteAppointmentFee = this.DeleteAppointmentFee.bind(this);
        this.state = {AppDetails: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/AppDetails/')
        .then(response => {
            this.setState({AppDetails: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    DeleteAppointmentFee(id){
        axios.delete('http://localhost:8070/AppDetails/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Appointment deleted successfully!","success")
        this.setState({
            AppDetails: this.state.AppDetails.filter(el => el._id !== id)
        })
    }

    //search
    filterData(AppDetails,searchKey){

        const result = AppDetails.filter((Fee)=>

        Fee.PatientID.toLowerCase().includes(searchKey)||
        Fee.Patientname.toLowerCase().includes(searchKey)||
        Fee.Phoneno.toLowerCase().includes(searchKey)||
        Fee.Email.toLowerCase().includes(searchKey)
       
        )

        this.setState({AppDetails:result})

    }

    handleSearchArea = (e) =>{
          const searchKey = e.currentTarget.value;
          axios.get('http://localhost:8070/AppDetails/').then(res =>{

            this.filterData(res.data,searchKey)
        })

      }

    CurrentAppointmentTable(){
        return this.state.AppDetails.map(currentexercise => {

            return <AppointmentAppDetail AppDetails={currentexercise} DeleteAppointmentFee={this.DeleteAppointmentFee} key={currentexercise._id}/>

        })

    }

    

   render(){
       return (
            <div>
                <div class="mt-20 ...">
                    <br/><br/>
            <center><b><h3>All Appointments</h3></b></center>
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
                       <th>Patient ID</th>
                       <th>Patient name</th>
                       <th>Phone no</th>
                       <th>Email</th>
                       <th>Doctor</th>
                       <th>visited</th>
                       <th>SelectDate</th>
                       <th>Time</th>
                       <th>Comment</th>
                      

                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentAppointmentTable()  }
                       </tbody>
               </table>
           </div>
           <div className="button" className="mb-2 mr-8 ml-2 float-right ..."> 
         <button type ="button" class = "btn btn-primary" onClick={()=> generatePDF(this.state.AppDetails)}>Generate Report</button>
            <br/>
            <br/>
            <a href="/AdminSideA" className="login-btn"><span class="d-none d-md-inline"></span>BACK</a>
            <br/>
            <br/>
        </div>
           </div>
           </div>
       )
   }
}