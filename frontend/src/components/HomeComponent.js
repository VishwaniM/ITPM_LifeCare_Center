import React from "react";
import CountUp from 'react-countup'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import "./assets/css/style.css";
import "./assets/js/main.js";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/animate.css/animate.min.css";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";

import Slide1 from './assets/img/slide/slide-1.jpg';
import Slide2 from './assets/img/slide/slide-2.jpg';
import Slide3 from './assets/img/slide/slide-3.jpg';
import About from './assets/img/about.jpg';
import Testimonials1 from './assets/img/testimonials/testimonials-1.jpg';
import Testimonials2 from './assets/img/testimonials/testimonials-2.jpg';
import Testimonials3 from './assets/img/testimonials/testimonials-3.jpg';
import Testimonials4 from './assets/img/testimonials/testimonials-4.jpg';
import Testimonials5 from './assets/img/testimonials/testimonials-5.jpg';
import Gallery1 from './assets/img/gallery/gallery-1.jpg';
import Gallery2 from './assets/img/gallery/gallery-2.jpg';
import Gallery3 from './assets/img/gallery/gallery-3.jpg';
import Gallery4 from './assets/img/gallery/gallery-4.jpg';
import Gallery5 from './assets/img/gallery/gallery-5.jpg';
import Gallery6 from './assets/img/gallery/gallery-6.jpg';
import Gallery7 from './assets/img/gallery/gallery-7.jpg';
import Gallery8 from './assets/img/gallery/gallery-8.jpg';



function Home(props) {
  return (
    <div>
      <section id="hero">
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" style={{ backgroundImage: "url(" + Slide1 + ")" }}>
              <div className="container">
                <h2>Welcome to <span>Life Care</span></h2>
                <p>LifeCare is the most accredited hospital in the Sri Lankan healthcare sector. Since 2000, LifeCare has revolutionized the healthcare industry through infrastructure development and advancement of products and services, with a view to deliver healthcare that is on par with global medical standards.</p>
                <a href="#about" className="btn-get-started scrollto">Read More</a>
              </div>
            </div>
            <div class="carousel-item" style={{ backgroundImage: "url(" + Slide2 + ")" }}>
              <div className="container">
                <h2>We Care Your Health</h2>
                <p>Providing the best care, with care, for everyone by demonstrating compassion, accountability, respect, and expertise.</p>
                <a href="#about" className="btn-get-started scrollto">Read More</a>
              </div>
            </div>
            <div class="carousel-item" style={{ backgroundImage: "url(" + Slide3 + ")" }}>
              <div className="container">
                <h2>We're Innovating Patient Care</h2>
                <p>Cedars-Sinai is consistently recognized as a leader in medical research, with studies and clinical trials that result in cutting-edge treatments that improve the lives of patients around the world.</p>
                <a href="#about" className="btn-get-started scrollto">Read More</a>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>

      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><i className="fas fa-heartbeat"></i></div>
                <h4 className="title"><a href="">Surgery</a></h4>
                <p className="description">Surgery and aftercare after operation by qualified and caring staff.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="fas fa-pills"></i></div>
                <h4 className="title"><a href="">Pharmacies</a></h4>
                <p className="description">LifeCare offers a wide range of Pharmacy's throughout the country.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="fas fa-thermometer"></i></div>
                <h4 className="title"><a href="">Vaccinations</a></h4>
                <p className="description">We have superior vaccination storage facilities </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-dna"></i></div>
                <h4 className="title"><a href="">Neurology Centre</a></h4>
                <p className="description">We are the only Neurology Department in the Sri Lankan private healthcare sector that offers.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>About Us</h2>
            <p>LifeCare Hospital, Colombo is a flagship entity of the LifeCare Group of Hospitals.</p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <img src={About} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Our History</h3>
              <p>
              DIREX Life Care Center commenced operations in Sri Lanka on 7th June 2002, under the brand name of Apollo Hospitals, a part of the chain of Apollo Hospitals founded by the renown Dr. Pratap C. Reddy in India. we continue to dominate and lead the healthcare sector. Ours is still considered to be the best health care facility in the country. In 2012, we celebrated a decade of excellence in healthcare. Over the past decade, Life care center has revolutionized the healthcare industry in Sri Lanka through infrastructure development and advancement of its’ product and services, through sizeable investments, with a view to deliver healthcare that is on par with global developments in medical technology. We also play a critical role in the nation’s strategy to provide to provide world-class medical care whilst balancing the equation of affordability and accessibility for all Sri Lankans.
              </p>
              <h3>Our Promise</h3>
              <p>“We believe that every person has the right to be treated with utmost respect and consideration Therefore at Life Care we care about our patients We care about their families who are anxious and concerned. We care about our colleagues and how we as a team provide the best care to our patients. Because we care, we will be sincere, compassionate and sensitive to make a difference in the lives we touch!”</p>
            </div>
          </div>

        </div>
      </section>

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">

          <div className="row no-gutters">

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-user-md"></i>
                <CountUp end={85} duration={3} />
                <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
                <a href="doctors">Find out more &raquo;</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="far fa-hospital"></i>
                <CountUp end={25} duration={3} />
                <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-flask"></i>
                <CountUp end={12} duration={3} />
                <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-award"></i>
                <CountUp end={35} duration={3} />
                <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services services">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Services</h2>
            
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4 className="title"><a href="">Operation Theaters</a></h4>
              <p className="description">Life Care Center, the state of the Art facilityconsists of 12 operating theatres with 2 dedicated. Theatres for obestrics andgynecology and 2 private delivery suites and 6 specialized operating theatrewith laminar air flow facilities specially designed for neurosurgery andorthopedic surgeries.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><i className="fas fa-pills"></i></div>
              <h4 className="title"><a href="">Pharmacy services</a></h4>
              <p className="description">Our pharmacy provides all the medical and surgical supplies required by our customers, including outpatient care and prescriptions from outside doctors. A large proportion of the medications and items we offer are available 24/7. Each prescription is checked multiple times by qualified professionals, and we adhere to stringent precautionary procedures to ensure safety in administering medication.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon"><i className="fas fa-hospital-user"></i></div>
              <h4 className="title"><a href="">Medical Laboratory</a></h4>
              <p className="description">Life care center Laboratory performs the following tests on a Routine Basis (Daily / Hourly) and STAT according to the needs of the patients and consultants. Such as Blood glucose (FBS/PPBS/RBS/GCT/GGT), Lypase, Blood Sugar (FBS, PPBS, RES), Cholesterol etc.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon"><i className="fas fa-dna"></i></div>
              <h4 className="title"><a href="">Electromyography (EMG)</a></h4>
              <p className="description">The use of an instrument, which records electric currents generated in an active muscle. A concentric needle electrode is inserted into voluntary muscle and the amplified recording is viewed on an oscilloscope and heard through a speaker.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><i className="fas fa-wheelchair"></i></div>
              <h4 className="title"><a href="">Accident & Emergency Care</a></h4>
              <p className="description">The accident and emergency unit at Life care center is ready to handle any crisis, 24 hours a day. Our emergency management teams have the expertise and equipment to manage any conceivable medical case.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon"><i className="fas fa-notes-medical"></i></div>
              <h4 className="title"><a href="">Blood Bank</a></h4>
              <p className="description">Works closely with the National Blood Transfusion Center and provides the required supply of blood for our patients. The blood bank’s stringent quality standards and strict adherence to screening donors ensures that the highest quality blood products are readily available for the individual needs of patients.</p>
            </div>
          </div>

        </div>
      </section>

      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Testimonials</h2>
          </div>

          <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="50">
            <div class="swiper-wrapper">

              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        It was a very comforting and homelike atmosphere here with all the Nurses. I know my baby was in safe hands and they made it easy for me to go through this tough time with the baby, I am thankful to my Dr. Reshma for helping me get this beautiful angel.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials2} class="testimonial-img" />
                      <h3>Sara Wilsson</h3>
                      
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Good services from 8th floor staff. Special thanks to sister Sissa, Sister Vanita and sister Priyanka. Great doctors and Mansubhani mam and Fazal sir.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials1} class="testimonial-img" />
                      <h3>Saul Goodman</h3>
                      
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        We really appreciate the help of Dr. G. N. Mansukhani during this period of pregnancy. All staff on 8th floor is very cooperative and understands requirement very well. Special thanks to Dr. Mansukhani. Dr. Mansukhani treats patients like her family members.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials3} class="testimonial-img" />
                      <h3>Jena Karlis</h3>
                      
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        They were all great, treated me as if I was the only patient they had.  Dr. Post is the most caring doctor I have ever had and the only one to ever pray with me prior to surgery.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials4} class="testimonial-img" />
                      <h3>Matt Brandon</h3>
                      
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        The team is very professional, friendly and helpful.  I felt I was benefiting from the most current work in the field that was specific to my injury and repair.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials5} class="testimonial-img" />
                      <h3>John Larson</h3>
                      
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>
      </section>



      {/* <!-- ======= Gallery Section ======= --> */}
      <section id="gallery" className="gallery">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Gallery</h2>
            </div>

          <div className="gallery-slider swiper">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Gallery1} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                   
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={Gallery2} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={Gallery3} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={Gallery4} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={Gallery5} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={Gallery6} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={Gallery7} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={Gallery8} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </button>
            </div>
          </div>  
        </div>
      </section>
    </div>


  );
}

export default Home;
