import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";



export default class EditMedDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Mname: '',
            codeNum: '',
            section: '',
            des: '',
            quantity: '',
            price: '',

        }

    }

    componentDidMount() {
        axios.get('http://localhost:8070/MedDetails/' + this.props.match.params.id)
            .then(response => {
                this.setState({



                    Mname: response.data.Mname,
                    codeNum: response.data.codeNum,
                    section: response.data.section,
                    des: response.data.des,
                    quantity: response.data.quantity,
                    price: response.data.price,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    onChangeMname = (e) => {
        this.setState({
            Mname: e.target.value
        });
    }
    onChangecodeNum = (e) => {
        this.setState({
            codeNum: e.target.value
        });
    }
    onChangesection = (e) => {
        this.setState({
            section: e.target.value
        });
    }
    onChangedes = (e) => {
        this.setState({
            des: e.target.value
        });
    }
    onChangequantity = (e) => {
        this.setState({
            quantity: e.target.value.replace(/\D/g, '')
        });
    }
    onChangeprice = (e) => {
        this.setState({
            price: e.target.value.replace(/\D/g, '')
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const MedDetails = {


            Mname: this.state.Mname,
            codeNum: this.state.codeNum,
            section: this.state.section,
            des: this.state.des,
            quantity: this.state.quantity,
            price: this.state.price,
        }


        console.log(MedDetails);

        axios.put('http://localhost:8070/MedDetails/update/' + this.props.match.params.id, MedDetails)
            .then(res => console.log(res.data));

        swal.fire("Updated", "Medhicine details updated successfully!", "success")
        //window.location='/listMedDetails';
        this.props.history.push('/listMedDetails');


    }



    render() {

        return (
            <div className="container">
                <div>
                    <h3>Edit Medicine Details</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-grouo">

                            <label>Medicine Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Mname}
                                onChange={this.onChangeMname}
                            />

                        </div>
                        <div className="form-grouo">

                            <label>Code Number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.codeNum}
                                onChange={this.onChangecodeNum}
                            />

                        </div>
                        <label for="section">Section :</label>
                        <br></br>



                        <select value={this.state.section} onChange={this.onChangesection}>

                            <option value="Medicine">Medicine</option>

                            <option value="Food and Nutrition">Food and Nutrition</option>

                            <option value="Cosmatics">Cosmatics</option>

                            <option value="Others">Other</option>

                        </select>







                        <div className="form-grouo">

                            <label>Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.des}
                                onChange={this.onChangedes}
                            />

                        </div>
                        <div className="form-grouo">

                            <label>Quantity</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.quantity}
                                onChange={this.onChangequantity}
                            />

                        </div>

                        <div className="form-grouo">

                            <label>Price</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangeprice}
                            />

                        </div>

                        <br />
                        <div className="form-group" align="center">
                            <input type="submit" value="Edit Details" className="btn btn-primary" />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}