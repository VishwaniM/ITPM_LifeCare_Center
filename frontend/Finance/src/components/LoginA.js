
import React, { Component } from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from "sweetalert2";

import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
const validator = require('validator');




export default class MakeAppointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""

        };
    }

    //componentDitMount called automatically called right before anything display on the page
    componentDidMount() {
        this.setState({ name: 'test user' })
    }
    componentDidUpdate() {
        console.log(this.state);
    }


    handlesubmit(e){
        e.preventDefault();
        console.log("in submit");
//axios capost axios call to login
        axios.post('http://localhost:8070/auth/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.username);
                if (res.data) {
                    console.log("success");
                    swal.fire({
                        title: 'Login Successful',
                        text: 'You are now logged in',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    this.props.history.push('/');
                } else {
                    
                }
            })
            .catch(err => {
                console.log(err);
                swal.fire({
                    title: 'Login Failed',
                    text: 'Please check your username and password',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
            );
            
    }




    render() {
        return (





            <div className="m-8" >
                <br />
                <br />

                <div class="login-form">
                    <form onSubmit={ (e) => this.handlesubmit(e) } >
                        <h2 class="text-center">Log in</h2>
                        <div class="form-group">
                            <input type="text"  onChange={ (e) => this.setState({ username: e.target.value }) } class="form-control" placeholder="Username" required="required" />
                        </div>
                        <div class="form-group">
                            <input type="password" onChange={ (e) => this.setState({ password: e.target.value }) } class="form-control" placeholder="Password" required="required" />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Log in</button>
                        </div>
                        
                    </form>
                    <p class="text-center"><a href="#">Create an Account</a></p>
                </div>




            </div>







        )
    }

}