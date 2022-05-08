import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";



export default class EditPaymentFeeDetail extends Component{
    constructor(props) {
        super(props);
         
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
            FeeDetails: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/feeDetails/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                PatientID: response.data.PatientID,
                Patientname: response.data.Patientname,
                Phoneno:response.data.Phoneno,
                Email:response.data.Email,
                Province:response.data.Province,
                Sex:response.data.Sex,
                Birthday:response.data.Birthday,
                BloodType:response.data.BloodType,
                Phistory:response.data.Phistory,
              
                
               })
        })
        .catch(function (error){
            console.log(error);
        })
    }
    
    onChangePatientID=(e)=>{
        this.setState({
            PatientID : e.target.value
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

    onChangeProvince=(e)=>{
        this.setState({
            Province : e.target.value
        });
    }

    onChangeSex=(e)=>{
        this.setState({
            Sex : e.target.value
        });
    }

    onChangeBirthday=(e)=>{
        this.setState({
            Birthday : e.target.value
        });
    }

    onChangeBloodType=(e)=>{
        this.setState({
            BloodType : e.target.value
        });
    }

    onChangePhistory=(e)=>{
        this.setState({
            Phistory : e.target.value
        });
    }

    
   
    
    onSubmit=(e)=>{
        e.preventDefault();
        const FeeDetails ={

            PatientID: this.state.PatientID,
            Patientname: this.state.Patientname,
            Phoneno:this.state.Phoneno,
            Email:this.state.Email,
            Province:this.state.Province,
            Sex:this.state.Sex,
            Birthday:this.state.Birthday,
            BloodType:this.state.BloodType,
            Phistory:this.state.Phistory,
           
            
        }

    
       console.log(FeeDetails);

       axios.put('http://localhost:8070/feeDetails/update/'+this.props.match.params.id ,FeeDetails)
       .then(res => console.log(res.data));
        
       swal.fire("Updated","Patient updated successfully!","success")
       window.location='/listTFeeDetails'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <h3>Edit Patient Details</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-grouo">
                         
                         <label>Patient ID</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.PatientID}
                            onChange={this.onChangePatientID}
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
                         
                         <label>Province</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Province}
                            onChange={this.onChangeProvince}
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
                         
                         <label>Birthday</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Birthday}
                            onChange={this.onChangeBirthday}
                            />      
                        
                    </div>


                    <div className="form-grouo">
                         
                         <label>BloodType</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.BloodType}
                            onChange={this.onChangeBloodType}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label>Patient History</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Phistory}
                            onChange={this.onChangePhistory}
                            />      
                        
                    </div>




                   
                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Edit FeeDetails" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}