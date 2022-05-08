import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DoctorCom from "../components/DoctorComponent/DoctorCom";
import DoctorView from "./DoctorComponent/DoctorView";
import Appointments from './Appointments/AppointmentsComponent';
import Patients from './Patients/PatientsComponent';
import Pharmacy from './Pharmacy/PharmacyComponent';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";



class Main extends Component {

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact component={() => <Redirect to="/home" />} />

          <Route path="/home" component={HomePage} /> 

          <Route path="/doctors/search" exact component = {DoctorCom}/>
          <Route path="/doctorsdetails/search" exact component = {DoctorView}/>
          <Route path="/doctors" exact component={() => <Redirect to="/doctors"/>}><DoctorCom/></Route>
          <Route path="/doctorsdetails" exact component={() => <Redirect to="/doctorsdetails"/>}><DoctorView/></Route>  
          <Route path="/appointments" exact component={() => <Redirect to="/appointments"/>}><Appointments/></Route> 
          <Route path="/patients" exact component={() => <Redirect to="/patients"/>}><Patients/></Route> 
          <Route path="/pharmacy" exact component={() => <Redirect to="/pharmacy"/>}><Pharmacy/></Route>
          
          <Redirect to="/home" />
        </Switch>
        <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
