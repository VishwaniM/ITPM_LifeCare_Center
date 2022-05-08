/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

//report
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = MedDetails => {

    const doc = new jsPDF();
    const tableColumn = ["Medicine Name", "Code Number", "Section", "Description", "Quantity", "Price"];
    const tableRows = [];


    MedDetails.map(Fee => {
        const FeeData = [
            Fee.Mname,
            Fee.codeNum,
            Fee.section,
            Fee.des,
            Fee.quantity,
            Fee.price,

        ];
        tableRows.push(FeeData);
    })

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("Medicine Details Report.pdf");
};

const MedDetail = props => (
    <tr>
        <td>{props.MedDetails.Mname}</td>
        <td>{props.MedDetails.codeNum}</td>
        <td>{props.MedDetails.section}</td>
        <td>{props.MedDetails.des}</td>
        <td>{props.MedDetails.quantity}</td>
        <td>{props.MedDetails.price}</td>


        {/*<td >

        <Link to ={"/updateTuitionFee/"+props.MedDetails._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteTuitionFee(props.MedDetails._id)}}>Delete</a></td>
        */}
        <td>
            <a className="btn btn-warning" href={`/updateMed/${props.MedDetails._id}`}>
                <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
            &nbsp;
            <a className="btn btn-danger" href="#" onClick={() => { props.DeleteMed(props.MedDetails._id) }}>
                <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
        </td>
    </tr>
)

export default class DisplayMed extends Component {
    constructor(props) {
        super(props);

        this.DeleteMed = this.DeleteMed.bind(this);
        this.state = { MedDetails: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:8070/MedDetails/')
            .then(response => {
                this.setState({ MedDetails: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DeleteMed(id) {
        axios.delete('http://localhost:8070/MedDetails/delete/' + id)
            .then(res => console.log(res.data));
        swal.fire("Deleted", "Medicine Details deleted successfully!", "success")
        this.setState({
            MedDetails: this.state.MedDetails.filter(el => el._id !== id)
        })
    }

    //search
    filterData(MedDetails, searchKey) {

        const result = MedDetails.filter((Fee) =>
            
            Fee.Mname.toLowerCase().includes(searchKey) ||
            Fee.codeNum.toLowerCase().includes(searchKey) ||
            Fee.section.toLowerCase().includes(searchKey) ||
            Fee.des.toLowerCase().includes(searchKey) ||
            Fee.quantity.toLowerCase().includes(searchKey) ||
            Fee.price.toLowerCase().includes(searchKey)

        )

        this.setState({ MedDetails: result })

    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get('http://localhost:8070/MedDetails/').then(res => {

            for(let i = 0; i < res.data.length; i++){
                res.data[i].codeNum = res.data[i].codeNum.toString();
                res.data[i].quantity = res.data[i].quantity.toString();
                res.data[i].price = res.data[i].price.toString();
                
            }
            this.filterData(res.data, searchKey)

        });

    }

    CurrentTuitionFeeTable() {
        return this.state.MedDetails.map(currentexercise => {

            return <MedDetail MedDetails={currentexercise} DeleteMed={this.DeleteMed} key={currentexercise._id} />

        })

    }



    render() {
        return (
            <div>
                <div class="mt-20 ...">
                    <center><b><h3>Medicine Details</h3></b></center>
                </div>
                <div className="container m-20 mt-3 ... ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mt-2 mb-2" />
                            <div className="col-lg-3 mt-2 mb-2">

                                <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>
                                </input>
                            </div>
                        </div>

                        <table className="table table-hover" style={{ backgroundColor: "rgb(200,200,200,0.6)", borderRadius: "20px 20px 0px 0px", marginTop: "30px" }}>
                            <thead className="thead-light">
                                <tr>
                                    <th>Medicine Name</th>
                                    <th>Code Number</th>
                                    <th>Section</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.CurrentTuitionFeeTable()}
                            </tbody>
                        </table>
                    </div>
                    <div className="button mb-2 mr-8 ml-2 float-right ...">
                        <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(this.state.MedDetails)}>Generate Report</button>
                    </div>
                </div>
            </div>
        )
    }
}