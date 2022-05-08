import React, { Component} from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import swal from "sweetalert2";

export default class InsertOrder extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
           
            cusName:'',
            address:'',
            pNumber:'',
            medList: '',
            timeP: '',
            details: '',
            //DateError:''
            cusNameerror:'',
            addresserror:'',
            pNumbererror:'',
            medListerror: '',
            timePerror: '',
         


        }
    }  
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            OrderMed:['test user'],
            name : 'test user'
        })
    }
    
    
    
    
    onChangecusName=(e)=>{
        this.setState({
            cusName: e.target.value
        });
    }
    onChangeaddress=(e)=>{
        this.setState({
            address: e.target.value
        });
    }
    onChangepNumber=(e)=>{
        this.setState({
            pNumber: e.target.value.replace(/\D/g,'')
        });
    }
    onChangemedList=(e)=>{
        this.setState({
            medList: e.target.value
        });
    }
    onChangetimeP=(e)=>{
        this.setState({
            timeP: e.target.value
        });
    }
    onChangedetails=(e)=>{
        this.setState({
            details: e.target.value
        });
    }
    
    validate=()=>{

        //let DateError='';
        let cusNameerror='';
        let addresserror='';
        let pNumbererror='';
        let medListerror='';
        let timePerror='';
       

        /*if(!this.state.Date){
            DateError="Date cannot be empty"
        }*/
        if(!this.state.cusName){
            cusNameerror="Customer name cannot be empty"
        }
        if(!this.state.address){
            addresserror="Address cannot be empty"
        }
        if(!this.state.pNumber){
            pNumbererror="Phone Number cannot be empty"
        }
        if(!this.state.medList){
            medListerror="Medicine List cannot be empty"
        }
        if(!this.state.timeP){
            timePerror="Time Period cannot be empty"
        }
       




        if(cusNameerror || addresserror || pNumbererror || medListerror || timePerror){
            this.setState({cusNameerror,addresserror,pNumbererror,medListerror,timePerror})
            return false;
        }

        return true;


    }
     
   

    onSubmit=(e)=>{
        e.preventDefault();


        //changed barrow to some name
        const  OrderMed ={
            
            cusName:this.state.cusName,
            address:this.state.address,
            pNumber:this.state.pNumber,
            medList:this.state.medList,
            timeP:this.state.timeP,
            details:this.state.details,
        }

        const isValid = this.validate()
        if(isValid){
        axios.post('http://localhost:8070/OrderMed/add',OrderMed)
        swal.fire("Inserted"," Order successfully!","success")
        .then(()=>{
            //alert("Order added");
            this.setState({
                cusName:"",
            address:"",
            pNumber:"",
            medList: "",
            timeP: "",
            details: "",
            })

        }).catch((err)=>{
            alert(err)
        })
    }
}

    

 render(){
        return(

            <div className="m-8 ..."style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
                <br></br><h3><b>Order Medicine</b></h3>
            <form onSubmit={this.onSubmit}>
            
            
            <div class="form-group">
                <label for="cusName" class="form-label">Customer Name</label>
                <input type="text" class="form-control"  id="cusName" placeholder="Enter Customer Name"
                value={this.state.cusName}
                onChange={this.onChangecusName}></input>
                <div style={{color:"red"}}>
                    {this.state.cusNameerror}
                </div>
                
            </div>
           

             <div class="form-group">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control"  id="address" placeholder="Enter Address"
                value={this.state.address}
                onChange={this.onChangeaddress}></input>
                <div style={{color:"red"}}>
                    {this.state.addresserror}
                </div>
                </div>
            
            <div class="form-group">
                <label for="pNumber" class="form-label">Phonenumber</label>
                <input type="text" class="form-control" id="pNumber" placeholder="Enter Phonenumber"
                value={this.state.pNumber}
                onChange={this.onChangepNumber}></input>
                <div style={{color:"red"}}>
                    {this.state.pNumbererror}
                </div>
                
            </div>
            <div class="form-group">
                <label for="medList" class="form-label">Medicine List</label>
                <input type="text" class="form-control"  id="medList" placeholder="Enter Medicine List"
                value={this.state.medList}
                onChange={this.onChangemedList}></input>
                <div style={{color:"red"}}>
                    {this.state.medListerror}
                </div>
                </div>

                <div class="form-group">
                <label for="timeP" class="form-label">Time Period</label>
                <input type="text" class="form-control"  id="timeP" placeholder="Enter Time Period(For 3 days,for week,for month like this..)"
                value={this.state.timeP}
                onChange={this.onChangetimeP}></input>
                <div style={{color:"red"}}>
                    {this.state.timePerror}
                </div>
                </div>

                <div class="form-group">
                <label for="details" class="form-label">Additional Details</label>
                <input type="text" class="form-control"  id="medList" placeholder="Enter Additional Details"
                value={this.state.details}
                onChange={this.onChangedetails}></input>
                
                </div>
            
            <br></br>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div className="float-right ...">
            <td >
                <Link to ={"/ViewOrder"}>View Details</Link></td>
            </div>
            </form>
        </div>







        )

    }

}