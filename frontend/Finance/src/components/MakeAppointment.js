

import React, { Component} from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import swal from "sweetalert2";
import './style.css';
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
const validator = require('validator');



 
export default class MakeAppointment extends Component{
    constructor(props) {
        super(props);

        //this.onChangePatientID = this.onChangePatientID.bind(this);
        //this.onChangePatientname = this.onChangePatientname.bind(this);
        //this.onChangePhoneno = this.onChangePhoneno.bind(this);
        //this.onChangeEmail = this.onChangeEmail.bind(this);
        //this.onChangeAmount = this.onChangeAmount.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            PatientID: '',
            Patientname: '',
            Phoneno:'',
            Email:'',

            Doctor:'',
            visited:'',
            SelectDate:'',
            Time:'',
            Comment:'',

           

            AppDetails: [],
            PatientIDError:'',
            PatientnameError:'',
            PhonenoError:'',
            EmailError:''
        

        }
    }  
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            AppDetails:['test user'],
            name : 'test user'
            
        })
        console.log("username -> " + localStorage.getItem('username'));
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    
    onChangePatientID=(e)=>{
        this.setState({
            PatientID: e.target.value
        });
    }
    onChangePatientname=(e)=>{
        this.setState({
            Patientname: e.target.value
        });
    }
    onChangePhoneno=(e)=>{
        this.setState({
            Phoneno: e.target.value
        });
    }
    onChangeEmail=(e)=>{
        this.setState({
            Email: e.target.value
        });
    } 


    onChangeDoctor=(e)=>{
        this.setState({
            Doctor: e.target.value
        });
    } 




    


    //validation part
    validate=(values)=>{
     
        let PatientIDError='';
        let PatientnameError='';
        let PhonenoError='';
        let EmailError='';
        

        if(!this.state.PatientID){
            PatientIDError="Patient ID cannot be empty";
        }
        if(!this.state.Patientname){
            PatientnameError="Patient name cannot be empty";
        }
        if(!this.state.Phoneno){
            PhonenoError="Phone no cannot be empty";
        }

        if(!this.state.Email){
            EmailError="Email cannot be empty";
        }
        else if(!this.state.Email.endsWith("@gmail.com") || !validator.isEmail(this.state.Email))
        {
            EmailError="Please Enter a Valid Email Type";
        }
       

        if(PatientIDError || PatientnameError || PhonenoError || EmailError ){
            this.setState({PatientIDError,PatientnameError,PhonenoError,EmailError});
            

            return false;
        }

        return true;



    } 
   

    onSubmit=(e)=>{
        e.preventDefault();

        //changed barrow to some name
        const AppDetails ={
            PatientID:this.state.PatientID,
            Patientname:this.state.Patientname,
            Phoneno:this.state.Phoneno,
            Email:this.state.Email,

            Doctor:this.state.Doctor,
            visited:this.state.visited,
            SelectDate:this.state.SelectDate,
            Time:this.state.Time,
            Comment:this.state.Comment,
            Username: localStorage.getItem('username'),

           
        }

        const isValid = this.validate()


        if(isValid){
        axios.post('http://localhost:8070/AppDetails/add',AppDetails)
        swal.fire("Inserted","Appointment added successfully!","success")
        .then(()=>{
            //alert("New Fee Details Added");
            this.setState({
                PatientID:"",
                Patientname:"",
                Phoneno:"",
                Email:"",
                Doctor:"",
                visited:"",
                SelectDate:"",
                Time:"",
                Comment:"",
             
            })
        }).catch((err)=>{
            alert(err)
        })
    }
}
//demo button
btnDemo = (e) => {
    e.preventDefault();
  
    const {PatientID,Patientname,Phoneno,Email } = this.state;
  
    const data = {
        PatientID:PatientID,
        Patientname:Patientname,
        Phoneno:Phoneno,
        Email:Email,
        
    }
  
    console.log(data)
  
    this.setState(
        {
            PatientID:"tv980",
            Patientname:"Paba",
            Phoneno:"sub456",
            Email:"A/L History",
           
        }
    )
  }
    

 render(){
        return(
            




            <div className="m-8 ..."style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
               <br/> 
               <br/> 

               <h3><center><b>Make an Appointment </b></center></h3>
                
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="PatientID" class="form-label">Patient ID</label>
                <input type="text" class="form-control"  id="PatientID" placeholder="Enter PatientID"
                value={this.state.PatientID}
                onChange={this.onChangePatientID}></input>
                <div style={{color:"red"}}>
                    {this.state.PatientIDError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="Name" class="form-label">Patient name</label>
                <input type="text" class="form-control" id="Name" placeholder="Enter Name"
                value={this.state.Patientname}
                onChange={this.onChangePatientname}></input>
                <div style={{color:"red"}}>
                    {this.state.PatientnameError}
                </div>   
                
            </div>
            <div className="input-box">
                <label for="Phoneno" class="form-label">Phone Number</label> <br/>
                <input type="text" class="form-control" id="Phone no" placeholder="Enter Phone no (702507788)"
                className="m-8 ..."style={{padding:"8px 1400px 10px 100px",marginBottom:"0px", borderRadius:"5px" }}
                value={this.state.Phoneno}
                onChange={this.onChangePhoneno} required ></input>
                <span class="unit">+94</span>
                <div style={{color:"red"}}>
                    {this.state.PhonenoError}
                </div>  

            </div>

  
<br/>    

            <div class="form-group">
                <label for="Email" class="form-label">Email</label>
                <input type="text" class="form-control" id="Email" placeholder="Enter Email"
                value={this.state.Email}
                onChange={this.onChangeEmail}></input> 

                <div style={{color:"red"}}>
                    {this.state.EmailError}
                </div>   
            </div>  <br/>




            <div class="form-group">
                <label for="doctor">Select Doctor :</label><br/>
                    
                    <select   className="m-9 ..."style={{ padding:"10px 785px", marginTop:"1px",display: "inline-block", 
                    border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}    value={this.state.doctor} onChange={this.onChangeDoctor}>
                         <option value="Dr.Nimal">Dr.nimal</option>
                         <option value="Dr.Sunil">Dr.Sunil</option>
                         <option value="Dr.Lakshitha">Dr.Lakshitha</option>
                        <option value="Dr.pathum">Dr.Pathum</option>
                    </select>

            </div> <br/>

            <div class="form-group">
                <label for="visited">Fist time visit ? </label><br/>
                    
                    <select   className="m-9 ..."style={{ padding:"10px 817px", marginTop:"1px",display: "inline-block", 
                    border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}   onChange={ (e) => this.setState({ visited : e.target.value } )  }>
                         <option value="Yes">Yes</option>
                         <option value="No">No</option>
                        
                    </select>

            </div> <br/>
           


            <div class="form-group">
                
                 <label for="SelectDate">Select Date :</label>  <br/>
                        <input type="date" id="SelectDate" name="SelectDate"     
                         className="m-9 ..."style={{ padding:"10px 788px", marginTop:"1px",display: "inline-block", 
                         border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}
                        onChange={ (e) => this.setState({ SelectDate : e.target.value } )  } />
                        
            </div> <br/>


   

            <div class="form-group">
                <label for="Time">Select Time Slot :</label> <br/>

                    <select  className="m-9 ..."style={{ padding:"10px 790px", marginTop:"1px",display: "inline-block", 
                    border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}     onChange={ (e) => this.setState({ Time : e.target.value } )  }>

                         <option value="8-9">0800-0900</option>
                         <option value="10-11">1000-1100</option>
                         <option value="14-15">1400-1500</option>
                         <option value="16-17">1600-1700</option>
                    </select>

            </div> <br/>



            <div class="form-group">
                <label for="Comment" class="form-label">Comment</label>
                <input type="text" class="form-control" id="Comment" placeholder="Enter Comment"
               onChange={ (e) => this.setState({ Comment : e.target.value } )  }
               ></input>
               
                
            </div>



           
            <br></br>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
            <div className="float-right ...">
            <td >
                <Link to ={"/listTAppDetails"}>Previous Appointments</Link></td>
            </div>
            <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'5px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
             </button>
            </form>
            
        </div>







        )
    }

}