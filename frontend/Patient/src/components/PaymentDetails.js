/*import React,{useState} from 'react'
import axios from "axios";

export default function AddPayDetails(){

    const [TeacherId,setTeacherId]=useState("");
    const [Patientname,setPatientname]=useState("");
    const [subjectId,setSubjectId]=useState("");
    const [subjectName,setSubjectName]=useState("");
    const [Amount,setAmount]=useState("");

    function sendData(e){
        //preventDefault() is used to stop doing the allocated task in submit
        e.preventDefault();
        
        const newPayDetails ={
            TeacherId,
            Patientname,
            Phoneno,
            subjectName,
            Amount,
        }
        //console.log(newPayDetails)
        //adding data
        axios.post("http://localhost:8070/PayDetails/add",newPayDetails).then(()=>{
            alert("Fee details added")
        }).catch((err)=>{
            alert(err);
            console.log(err)
        })

    }


    return(
        <div className="m-24 p-3 border-1 border-gray-400 ...">
            <form onSubmit={sendData}>
            <div class="form-group">
                <label for="TeacherId" class="form-label">Teacher Id</label>
                <input type="text" class="form-control"  id="TeacherId" placeholder="Enter Teacher Id" 
                onChange={(e)=>{
                    setTeacherId(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
            
                <label for="Name" class="form-label">Teacher name</label>
                <input type="text" class="form-control" id="Name" placeholder="Enter Name"
                onChange={(e)=>{
                    setPatientname(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="SubjectID" class="form-label">Suject Id</label>
                <input type="text" class="form-control" id="subjectID" placeholder="Enter Subject ID"
                onChange={(e)=>{
                    setSubjectId(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="SubjectName" class="form-label">Suject Name</label>
                <input type="text" class="form-control" id="SubjectName" placeholder="Enter Subject Name"
                onChange={(e)=>{
                    setSubjectName(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="Amount" class="form-label">Amount</label>
                <input type="text" class="form-control" id="Amount" placeholder="Enter amount"
                onChange={(e)=>{
                    setAmount(e.target.value);
                }}></input>
                
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>







        
    )
}*/

import React, { Component} from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import swal from "sweetalert2";
import './style.css';
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
const validator = require('validator');



 
export default class PaymentDetails extends Component{
    constructor(props) {
        super(props);

        //this.onChangePaymentID = this.onChangePaymentID.bind(this);
        //this.onChangePatientname = this.onChangePatientname.bind(this);
        //this.onChangePhoneno = this.onChangePhoneno.bind(this);
        //this.onChangeEmail = this.onChangeEmail.bind(this);
        //this.onChangeAmount = this.onChangeAmount.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            PaymentID: '',
            Patientname: '',
            Phoneno:'',
            Email:'',
            

            Doctor:'',
            Sex:'',
            PaymentDate:'',
            PaymentType:'',
            Amount:'',

           

            PaymentDetails: [],
            PaymentIDError:'',
            PatientnameError:'',
            PhonenoError:'',
            EmailError:''
        

        }
    }  
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            PaymentDetails:['test user'],
            name : 'test user'
        })
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    
    onChangePaymentID=(e)=>{
        this.setState({
            PaymentID: e.target.value
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
     
        let PaymentIDError='';
        let PatientnameError='';
        let PhonenoError='';
        let EmailError='';
        

        if(!this.state.PaymentID){
            PaymentIDError="Patient ID cannot be empty";
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
       

        if(PaymentIDError || PatientnameError || PhonenoError || EmailError ){
            this.setState({PaymentIDError,PatientnameError,PhonenoError,EmailError});
            

            return false;
        }

        return true;



    } 
   

    onSubmit=(e)=>{
        e.preventDefault();

        //changed barrow to some name
        const PaymentDetails ={
            PaymentID:this.state.PaymentID,
            Patientname:this.state.Patientname,
            Phoneno:this.state.Phoneno,
            Email:this.state.Email,

            Doctor:this.state.Doctor,
            Sex:this.state.Sex,
            PaymentDate:this.state.PaymentDate,
            PaymentType:this.state.PaymentType,
            Amount:this.state.Amount,

           
        }

        const isValid = this.validate()

        if(isValid){
        axios.post('http://localhost:8070/PaymentDetails/add',PaymentDetails)
        swal.fire("Inserted","Payment added successfully!","success")
        .then(()=>{
            //alert("New Fee Details Added");
            this.setState({
                PaymentID:"",
                Patientname:"",
                Phoneno:"",
                Email:"",
                Doctor:"",
                Sex:"",
                PaymentDate:"",
                PaymentType:"",
                Amount:"",
             
            })
        }).catch((err)=>{
            alert(err)
        })
    }
}
//demo button
btnDemo = (e) => {
    e.preventDefault();
  
    const {PaymentID,Patientname,Phoneno,Email } = this.state;
  
    const data = {
        PaymentID:PaymentID,
        Patientname:Patientname,
        Phoneno:Phoneno,
        Email:Email,
        
    }
  
    console.log(data)
  
    this.setState(
        {
            PaymentID:"tv980",
            Patientname:"Paba",
            Phoneno:"sub456",
            Email:"A/L History",
           
        }
    )
  }
    

 render(){
        return(
            




            <div className="m-8 ..."style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
               <h3><center><b>Make Payment </b></center></h3>
                
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="PaymentID" class="form-label">Payment ID</label>
                <input type="text" class="form-control"  id="PaymentID" placeholder="Enter PaymentID"
                value={this.state.PaymentID}
                onChange={this.onChangePaymentID}></input>
                <div style={{color:"red"}}>
                    {this.state.PaymentIDError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="Name" class="form-label">Patient Name</label>
                <input type="text" class="form-control" id="Name" placeholder="Enter Name"
                value={this.state.Patientname}
                onChange={this.onChangePatientname}></input>
                <div style={{color:"red"}}>
                    {this.state.PatientnameError}
                </div>   
                
            </div>
            <div className="input-box">
                <label for="Phoneno" class="form-label">Contact Number</label> <br/>
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
                <label for="Sex">Gender</label><br/>
                    
                    <select   className="m-9 ..."style={{ padding:"10px 817px", marginTop:"1px",display: "inline-block", 
                    border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}   onChange={ (e) => this.setState({ Sex : e.target.value } )  }>
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                        
                    </select>

            </div> <br/>
           


            <div class="form-group">
                
                 <label for="PaymentDate">Payment Date:</label>  <br/>
                        <input type="date" id="PaymentDate" name="PaymentDate"     
                         className="m-9 ..."style={{ padding:"10px 788px", marginTop:"1px",display: "inline-block", 
                         border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}
                        onChange={ (e) => this.setState({ PaymentDate : e.target.value } )  } />
                        
            </div> <br/>


   

            <div class="form-group">
                <label for="PaymentType">Payment Type :</label> <br/>

                    <select  className="m-9 ..."style={{ padding:"10px 790px", marginTop:"1px",display: "inline-block", 
                    border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}     onChange={ (e) => this.setState({ PaymentType : e.target.value } )  }>

                         <option value="EZ-CASH">EZ Cash</option>
                         <option value="M-CASH">M Cash</option>
                         <option value="VISA-CARD">Visa Card</option>
                         <option value="CASH">Cash</option>
                    </select>

            </div> <br/>



            <div class="form-group">
                <label for="Amount" class="form-label">Amount</label>
                <input type="text" class="form-control" id="Amount" placeholder="Enter Amount"
               onChange={ (e) => this.setState({ Amount : e.target.value } )  }
               ></input>
               
                
            </div>



           
            <br></br>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
            <div className="float-right ...">
            <td >
                <Link to ={"/listTPaymentDetails"}>View Details</Link></td>
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