/*import React,{useState} from 'react'
import axios from "axios";

export default function AddFeeDetails(){

    const [TeacherId,setTeacherId]=useState("");
    const [Patientname,setPatientname]=useState("");
    const [subjectId,setSubjectId]=useState("");
    const [subjectName,setSubjectName]=useState("");
    const [Phistory,setPhistory]=useState("");

    function sendData(e){
        //preventDefault() is used to stop doing the allocated task in submit
        e.preventDefault();
        
        const newFeeDetails ={
            TeacherId,
            Patientname,
            Phoneno,
            subjectName,
            Phistory,
        }
        //console.log(newFeeDetails)
        //adding data
        axios.post("http://localhost:8070/feeDetails/add",newFeeDetails).then(()=>{
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
                <label for="Phistory" class="form-label">Phistory</label>
                <input type="text" class="form-control" id="Phistory" placeholder="Enter Phistory"
                onChange={(e)=>{
                    setPhistory(e.target.value);
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

        //this.onChangePatientID = this.onChangePatientID.bind(this);
        //this.onChangePatientname = this.onChangePatientname.bind(this);
        //this.onChangePhoneno = this.onChangePhoneno.bind(this);
        //this.onChangeEmail = this.onChangeEmail.bind(this);
        //this.onChangePhistory = this.onChangePhistory.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            PatientID: '',
            Patientname: '',
            Phoneno:'',
            Email:'',
            

            Province:'',
            Sex:'',
            Birthday:'',
            BloodType:'',
            Phistory:'',

           

            feeDetails: [],
            PatientIDError:'',
            PatientnameError:'',
            PhonenoError:'',
            EmailError:''
        

        }
    }  
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            feeDetails:['test user'],
            name : 'test user'
        })
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


    onChangeProvince=(e)=>{
        this.setState({
            Province: e.target.value
        });
    } 

    onChangeSex=(e)=>{
        this.setState({
            Sex: e.target.value
        });
    } 
    onChangeBirthday=(e)=>{
        this.setState({
            Birthday: e.target.value
        });
    } 
    onChangeBloodType=(e)=>{
        this.setState({
            BloodType: e.target.value
        });
    } 
    onChangePhistory=(e)=>{
        this.setState({
            Phistory: e.target.value
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
        const feeDetails ={
            PatientID:this.state.PatientID,
            Patientname:this.state.Patientname,
            Phoneno:this.state.Phoneno,
            Email:this.state.Email,

            Province:this.state.Province,
            Sex:this.state.Sex,
            Birthday:this.state.Birthday,
            BloodType:this.state.BloodType,
            Phistory:this.state.Phistory,

           
        }

        const isValid = this.validate()

        if(isValid){
        axios.post('http://localhost:8070/feeDetails/add',feeDetails)
        swal.fire("Inserted","Patient added successfully!","success")
        .then(()=>{
            //alert("New Fee Details Added");
            this.setState({
                PatientID:"",
                Patientname:"",
                Phoneno:"",
                Email:"",
                Province:"",
                Sex:"",
                Birthday:"",
                BloodType:"",
                Phistory:"",
             
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
               <h3><center><b>Manage Patient </b></center></h3>
                
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
                <label for="Province">Province :</label><br/>
                    
                    <select   className="m-9 ..."style={{ padding:"10px 785px", marginTop:"1px",display: "inline-block", 
                    border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}    value={this.state.Province} onChange={this.onChangeProvince}>
                         <option value="Western">Western</option>
                         <option value="Eastern">Eastern</option>
                         <option value="Central">Central</option>
                        <option value="Southern">Southern</option>
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
                
                 <label for="Birthday">Birthday:</label>  <br/>
                        <input type="date" id="Birthday" name="Birthday"     
                         className="m-9 ..."style={{ padding:"10px 788px", marginTop:"1px",display: "inline-block", 
                         border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}
                        onChange={ (e) => this.setState({ Birthday : e.target.value } )  } />
                        
            </div> <br/>


   

            <div class="form-group">
                <label for="BloodType">Blood Type :</label> <br/>

                    <select  className="m-9 ..."style={{ padding:"10px 790px", marginTop:"1px",display: "inline-block", 
                    border: "2px solid #00888e", borderRadius:"10px", boxSizing:"border-box"}}     onChange={ (e) => this.setState({ BloodType : e.target.value } )  }>

                         <option value="A-">A-</option>
                         <option value="A+">A+</option>
                         <option value="B-">B-</option>
                         <option value="B+">B+</option>
                    </select>

            </div> <br/>



            <div class="form-group">
                <label for="Phistory" class="form-label">Patient history</label>
                <input type="text" class="form-control" id="Phistory" placeholder="Enter Patient History"
               onChange={ (e) => this.setState({ Phistory : e.target.value } )  }
               ></input>
               
                
            </div>



           
            <br></br>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
            <div className="float-right ...">
            <td >
                <Link to ={"/listTFeeDetails"}>View Details</Link></td>
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