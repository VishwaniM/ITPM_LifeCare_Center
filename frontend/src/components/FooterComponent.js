import React from "react";
import "./assets/css/style.css";
import "boxicons";
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

function Footer(props) {
  return (
   
   <footer id="footer" style={{marginTop: '50px'}}>
   
      
   
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <a href="index.html" class="logo me-auto"><img src={LOGO} /></a>
              
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook" ></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
          <div className="footer-info">
              <h3>Life Care</h3>
              <p>
                A108 Adam Street, NY, <br/>
                Colombo, Sri Lanka<br/><br/>
                <strong>Phone:</strong> +94 12 123 1234<br/>
                <strong>Email:</strong> lifecare@gmail.com<br/>
              </p>
              </div>          
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-links2">
          <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Operation Theaters</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Pharmacy services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Medical Laboratory</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Electromyography (EMG)</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Accident & Emergency Care</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Blood Bank</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Life Care</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by DIREX
      </div>
    </div>
  </footer>
     
  );
}

export default Footer;
