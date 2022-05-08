import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";



export default class EditAppointmentAppDetail extends Component{
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
            AppDetails: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/AppDetails/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                PatientID: response.data.PatientID,
                Patientname: response.data.Patientname,
                Phoneno:response.data.Phoneno,
                Email:response.data.Email,
                Doctor:response.data.Doctor,
                visited:response.data.visited,
                SelectDate:response.data.SelectDate,
                Time:response.data.Time,
                Comment:response.data.Comment,
              
                
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

    onChangeDoctor=(e)=>{
        this.setState({
            Doctor : e.target.value
        });
    }

    onChangevisited=(e)=>{
        this.setState({
            visited : e.target.value
        });
    }

    onChangeSelectDate=(e)=>{
        this.setState({
            SelectDate : e.target.value
        });
    }

    onChangeTime=(e)=>{
        this.setState({
            Time : e.target.value
        });
    }

    onChangeComment=(e)=>{
        this.setState({
            Comment : e.target.value
        });
    }

    
   
    
    onSubmit=(e)=>{
        e.preventDefault();
        const AppDetails ={

            PatientID: this.state.PatientID,
            Patientname: this.state.Patientname,
            Phoneno:this.state.Phoneno,
            Email:this.state.Email,
            Doctor:this.state.Doctor,
            visited:this.state.visited,
            SelectDate:this.state.SelectDate,
            Time:this.state.Time,
            Comment:this.state.Comment,
           
            
        }

    
       console.log(AppDetails);

       axios.put('http://localhost:8070/AppDetails/update/'+this.props.match.params.id ,AppDetails)
       .then(res => console.log(res.data));
        
       swal.fire("Updated","Appointment updated successfully!","success")
       window.location='/listTAppDetails'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>Edit AppDetails</h3>
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
                         
                         <label>Phone no</label> 
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
                         
                         <label>visited</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.visited}
                            onChange={this.onChangevisited}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label>SelectDate</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.SelectDate}
                            onChange={this.onChangeSelectDate}
                            />      
                        
                    </div>


                    <div className="form-grouo">
                         
                         <label>Time</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Time}
                            onChange={this.onChangeTime}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label>Comment</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Comment}
                            onChange={this.onChangeComment}
                            />      
                        
                    </div>




                   
                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Edit AppDetails" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}