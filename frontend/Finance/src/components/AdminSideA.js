
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




    


  

    

 render(){
        return(
            




            <div className="m-8 ..."style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
               <br/> 
               <br/> 

               <h3><center><b>A D M I N  S I D E </b></center></h3>
                
           
          
           

  
<br/>    


        
            <br></br>

            
            <center><a href="/DisplayAppointment" className="login-btn"><span class="d-none d-md-inline"></span>Display All Appointments</a></center>
          

           
            
        </div>







        )
    }

}