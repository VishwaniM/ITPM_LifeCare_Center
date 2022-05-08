import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";



export default class EditPaymentDetails extends Component{
    constructor(props) {
        super(props);
         
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
            PaymentDetailss: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/PaymentDetailss/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                PaymentID: response.data.PaymentID,
                Patientname: response.data.Patientname,
                Phoneno:response.data.Phoneno,
                Email:response.data.Email,
                Doctor:response.data.Doctor,
                Sex:response.data.Sex,
                PaymentDate:response.data.PaymentDate,
                PaymentType:response.data.PaymentType,
                Amount:response.data.Amount,
              
                
               })
        })
        .catch(function (error){
            console.log(error);
        })
    }
    
    onChangePaymentID=(e)=>{
        this.setState({
            PaymentID : e.target.value
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
            Email : e.target.value
        });
    }

    onChangeDoctor=(e)=>{
        this.setState({
            Doctor : e.target.value
        });
    }

    onChangeSex=(e)=>{
        this.setState({
            Sex : e.target.value
        });
    }

    onChangePaymentDate=(e)=>{
        this.setState({
            PaymentDate : e.target.value
        });
    }

    onChangePaymentType=(e)=>{
        this.setState({
            PaymentType : e.target.value
        });
    }

    onChangeAmount=(e)=>{
        this.setState({
            Amount : e.target.value
        });
    }

    
   
    
    onSubmit=(e)=>{
        e.preventDefault();
        const PaymentDetailss ={

            PaymentID: this.state.PaymentID,
            Patientname: this.state.Patientname,
            Phoneno:this.state.Phoneno,
            Email:this.state.Email,
            Doctor:this.state.Doctor,
            Sex:this.state.Sex,
            PaymentDate:this.state.PaymentDate,
            PaymentType:this.state.PaymentType,
            Amount:this.state.Amount,
           
            
        }

    
       console.log(PaymentDetailss);

       axios.put('http://localhost:8070/PaymentDetailss/update/'+this.props.match.params.id ,PaymentDetailss)
       .then(res => console.log(res.data));
        
       swal.fire("Updated","Appointment updated successfully!","success")
       window.location='/listTPaymentDetailss'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <h3>Edit PaymentDetailss</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-grouo">
                         
                         <label>Teacher ID</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.PaymentID}
                            onChange={this.onChangePaymentID}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Patient name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Patientname}
                            onChange={this.onChangePatientname}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Contact Number</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Phoneno}
                            onChange={this.onChangePhoneno}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Email</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEmail}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label>Doctor</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Doctor}
                            onChange={this.onChangeDoctor}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label>Sex</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Sex}
                            onChange={this.onChangeSex}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label>Payment Date</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.PaymentDate}
                            onChange={this.onChangePaymentDate}
                            />      
                        
                    </div>


                    <div className="form-grouo">
                         
                         <label>PaymentType</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.PaymentType}
                            onChange={this.onChangePaymentType}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label>Amount</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Amount}
                            onChange={this.onChangeAmount}
                            />      
                        
                    </div>




                   
                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Edit PaymentDetailss" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}