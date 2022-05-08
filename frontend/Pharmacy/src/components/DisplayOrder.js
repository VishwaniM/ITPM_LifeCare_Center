import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

//report
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = OrderMed => {

    const doc = new jsPDF();
    const tableColumn = ["Customer Name", "Address", "Phone Number", "Medicine List", "Time Period", "Aditional Details"];
    const tableRows = [];


    OrderMed.map(Fee => {
        const FeeData = [
            Fee.cusName,
            Fee.address,
            Fee.pNumber,
            Fee.medList,
            Fee.timeP,
            Fee.details,

        ];
        tableRows.push(FeeData);
    })

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("Order Details Report.pdf");
};


const OrderMed = props => (
    <tr>
        <td>{props.OrderMed.cusName}</td>
        <td>{props.OrderMed.address}</td>
        <td>{props.OrderMed.pNumber}</td>
        <td>{props.OrderMed.medList}</td>
        <td>{props.OrderMed.timeP}</td>
        <td>{props.OrderMed.details}</td>



    </tr>
)

export default class DisplayOrder extends Component {
    constructor(props) {
        super(props);

        // this.DeleteTuitionFee = this.DeleteTuitionFee.bind(this);
        this.state = { DisplayOrder: [] }
    }



    componentDidMount() {
        axios.get('http://localhost:8070/OrderMed/')
            .then(response => {
                this.setState({ OrderMed: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    //search
    filterData(OrderMed, searchKey) {

        const result = OrderMed.filter((Fee) =>

            Fee.cusName.toLowerCase().includes(searchKey) ||
            Fee.address.toLowerCase().includes(searchKey) ||
            Fee.pNumber.toLowerCase().includes(searchKey) ||
            Fee.medList.toLowerCase().includes(searchKey) ||
            Fee.timeP.toLowerCase().includes(searchKey) ||
            Fee.details.toLowerCase().includes(searchKey)

        )

        this.setState({ OrderMed: result })

    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get('http://localhost:8070/OrderMed/').then(res => {

            this.filterData(res.data, searchKey)
        });

    }
    CurrentOrderTable() {
        return this.state.DisplayOrder.map(currentexercise => {

            return <OrderMed ViewOrders={currentexercise} DeleteTuitionFee={this.DeleteTuitionFee} key={currentexercise._id} />

        })

    }



    render() {
        return (
            <div>
                <div class="mt-20 ...">
                    <center><b><h3>Order Details</h3></b></center>
                </div>
                <div className=" containerm-20 mt-3 ...">

                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mt-2 mb-2" />
                            <div className="col-lg-3 mt-2 mb-2">

                                <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>
                                </input>
                            </div>
                        </div>
                    </div>

                    <table class="table" className="table table-hover" style={{ backgroundColor: "rgb(200,200,200,0.6)", borderRadius: "20px 20px 0px 0px", marginTop: "30px" }}>
                        <thead className="thead-light">
                            <tr>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Phonenumber</th>
                                <th>Medicine List</th>
                                <th>Time Period</th>
                                <th>Additional Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.CurrentOrderTable()} */}
                            {   this.state.OrderMed &&
                                this.state.OrderMed.map( (i , key) => {
                                    return (

                                        <tr>
                                            <td>{ i.cusName }</td>
                                            <td>{ i.address }</td>
                                            <td>{ i.pNumber }</td>
                                            <td>{ i.medList }</td>
                                            <td>{ i.timeP }</td>
                                            <td>{ i.details }</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <div className="button mb-2 mr-0 ml-2 float-right ...">
                        <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(this.state.pettyCash)}>Generate Report</button>
                    </div>
                </div>
            </div>

        )
    }
}
