import React, { Component } from "react";
import "./assets/css/style.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/animate.css/animate.min.css";  
import "./assets/vendor/bootstrap/css/bootstrap.min.css"; 
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"; 
import "./assets/vendor/boxicons/css/boxicons.min.css"; 
import "./assets/vendor/glightbox/css/glightbox.min.css"; 
import "./assets/vendor/swiper/swiper-bundle.min.css"; 
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png"; 
import LOGO from './assets/img/logo.png'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
         <div id="topbar" class="d-flex align-items-center fixed-top">
            <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
               <div class="align-items-center d-none d-md-flex">
               <i class="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
               </div>
               <div class="d-flex align-items-center">
               <i class="bi bi-phone"></i> Call us now +94 12 123 1234
               </div>
            </div>
         </div>
        <header id="header" class="fixed-top">
         <div class="container d-flex align-items-center">

            <a href="index.html" class="logo me-auto"><img src={LOGO} /></a>

            <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
               <li><a class="nav-link scrollto " href="home">Home</a></li>
               <li><a class="nav-link scrollto" href="#about">About Us</a></li>
               <li><a class="nav-link scrollto" href="#services">Services</a></li>
               <li><a class="nav-link scrollto" href="doctors">Doctors</a></li>
               <li><a class="nav-link scrollto" href="#Pharmacy">Pharmacy</a></li>
               <li><a class="nav-link scrollto" href="#Patients">Patients</a></li>
               
               <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>
            <a href="#login" className="login-btn"><span class="d-none d-md-inline"></span> Login</a>
         </div>
      </header>
      </div>
    );
  }
}

export default Header;