

import React, { Component} from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import swal from "sweetalert2";

export default class MedDetails extends Component{
    constructor(props) {
        super(props);

        //this.onChangeMname = this.onChangeMname.bind(this);
        //this.onChangecodeNum = this.onChangecodeNum.bind(this);
        //this.onChangesection = this.onChangesection.bind(this);
        //this.onChangedes = this.onChangedes.bind(this);
        //this.onChangequantity = this.onChangequantity.bind(this);
         //this.onChangeprice = this.onChangeprice.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            Mname: '',
            codeNum: '',
            section:'',
            des:'',
            quantity:'',
            price:'',
        
            MnameError: '',
            codeNumError: '',
            sectionError:'',
            desError:'',
            quantityError:'',
            priceError:'',

        }
    }  
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            MedDetails:['test user'],
            name : 'test user'
        })
    }
    
    
    onChangeMname=(e)=>{
        this.setState({
            Mname: e.target.value
        });
    }
    onChangecodeNum=(e)=>{
        this.setState({
            codeNum: e.target.value
        });
    }
    onChangesection=(e)=>{
        this.setState({
            section: e.target.value
        });
    }
    onChangedes=(e)=>{
        this.setState({
            des: e.target.value
        });
    } 
    onChangequantity=(e)=>{
        this.setState({
            quantity: e.target.value.replace(/\D/g,'')
        });
    }
    onChangeprice=(e)=>{
        this.setState({
            price: e.target.value.replace(/\D/g,'')
        });
    }
    //validation part
    validate=()=>{

        let MnameError='';
        let codeNumError='';
        let sectionError='';
        let desError='';
        let quantityErrorr='';
        let priceError='';

        if(!this.state.Mname){
            MnameError="Medicine name cannot be empty";
        }
        if(!this.state.codeNum){
            codeNumError="Code number cannot be empty";
        }
        if(!this.state.section){
            sectionError="Section cannot be empty";
        }
        if(!this.state.des){
            desError="Description cannot be empty";
        }
        if(!this.state.quantity){
            quantityErrorr="Quantity cannot be empty";
        }
        if(!this.state.price){
            priceError="Price cannot be empty";
        }

        if(MnameError||  codeNumError|| sectionError ||  desError||quantityErrorr||priceError){
            this.setState({MnameError,  codeNumError,sectionError, desError,quantityErrorr,priceError});
            return false;
        }

        return true;



    } 
   

    onSubmit=(e)=>{
        e.preventDefault();

        //changed barrow to some name
        const MedDetails ={
            Mname:this.state.Mname,
            codeNum:this.state.codeNum,
            section:this.state.section,
            des:this.state.des,
            quantity:this.state.quantity,
            price:this.state.price,
        }

        const isValid = this.validate()

        if(isValid){
        axios.post('http://localhost:8070/MedDetails/add',MedDetails)
        swal.fire("Inserted","Medicine added successfully!","success")
        .then(()=>{
            //alert("New Medhicine Added");
            this.setState({
               

                Mname: "",
                codeNum: "",
                section:"",
                des:"",
                quantity:"",
                price:"",
            })
        }).catch((err)=>{
            alert(err)
        })
    }
}
//demo button
btnDemo = (e) => {
    e.preventDefault();
  
    const {Mname,codeNum,section, des,quantity,price} = this.state;
  
    const data = {

          
            Mname:Mname,
            codeNum:codeNum,
            section:section,
            des:des,
            quantity:quantity,
            price:price,
      
    }
  
    console.log(data)
  
    this.setState(
        {
            Mname:"Priton",
            codeNum:"M001",
            section:"OPD",
            des:"once a day",
            quantity:"2000",
            price:"20",
           
        }
    )
  }
    

 render(){
        return(

            <div className="m-8 ..."style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
              <br></br> <h3><center><b>ADD Medicine Details </b></center></h3>
                
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="Mname" class="form-label">Medicine name</label>
                <input type="text" class="form-control"  id="Mname" placeholder="Enter Medicine name"
                value={this.state.Mname}
                onChange={this.onChangeMname}></input>
                <div style={{color:"red"}}>
                    {this.state.MnameError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="codeNum" class="form-label">Code Number</label>
                <input type="text" class="form-control" id="codeNum" placeholder="Enter the Code Number"
                value={this.state.codeNum}
                onChange={this.onChangecodeNum}></input>
                <div style={{color:"red"}}>
                    {this.state.codeNumError}
                </div>   
                
            </div>
           
            <div class="form-group">

<label for="section">Section :</label>
<br></br>

   

    <select value={this.state.section} onChange={this.onChangesection}>

         <option value="Medicine">Medicine</option>

         <option value="Food and Nutrition">Food and Nutrition</option>

         <option value="Cosmatics">Cosmatics</option>

        <option value="Others">Other</option>

    </select>



</div>
       
            <div class="form-group">
                <label for="des" class="form-label">Description</label>
                <input type="text" class="form-control" id="des" placeholder="Enter Description"
                value={this.state.des}
                onChange={this.onChangedes}></input>
                <div style={{color:"red"}}>
                    {this.state.desError}
                </div> 
                
            </div>
            <div class="form-group">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="text" class="form-control" id="quantity" placeholder="Enter Quantity"
                value={this.state.quantity}
                onChange={this.onChangequantity}></input>
                <div style={{color:"red"}}>
                    {this.state.quantityError}
                </div>   
                </div>  

                <div class="form-group">
                <label for="price" class="form-label">Price</label>
                <input type="text" class="form-control" id="price" placeholder="Enter price"
                value={this.state.price}
                onChange={this.onChangeprice}></input>
                <div style={{color:"red"}}>
                    {this.state.priceError}
                </div>   
                
            </div>
            <br></br>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
            <div className="float-right ...">
            <td >
                <Link to ={"/listMedDetails"}>View Details</Link></td>
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