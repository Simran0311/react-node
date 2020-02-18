import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="Home">           
        <section className="bg-light-gradient pt-5 bg-light-gray hero-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="hero-title wow fadeInUp" data-wow-delay="1s">
                        <h1 className="heading_1 primary-color">The only analytics<br/> software for Chief<br/> People Officers</h1>
                        <p className="f-16 lh-1 secondary-color">Twine integrates 15+ sources of HR data to become your “single source of truth” for all people analytics and visualizations.</p>
                        <div className="d-flex-1 flex-row bd-highlight mb-3 d-none d-sm-block d-md-none d-lg-block">
                           <Link className="btn theme-btn theme-btn-blue px-4 py-2"  to="/request-demo">
                              Request Demo          
                           </Link>
                           <Link className="btn theme-btn theme-btn-white px-4 py-2 ml-3" to="/our-story">
                              Our Story      
                           </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 p-0">
                    <div className="hero-slider wow fadeInRight" data-wow-delay="1s">
                        <img className="show-desktop mac-img" src="assets/images/macbook_air.png"/>
                        <img className="show-mobile mac-img" src="assets/images/case.png" />
                        <div id="demo" className="carousel slide slider_set" data-ride="carousel">
                            
                            <ul className="carousel-indicators ">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            </ul>
                            
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/images/home-screen1.png" alt="Los Angeles"/>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/images/home-screen2.png" alt="Chicago"/>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/images/home-screen3.png" alt="New York"/>
                            </div>
                            </div>
                            
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 show-mobile px-4 pb-sm-5 pb-0">
                        <div className="text-center">
                           <Link className="btn theme-btn-blue px-4 py-2 btn-wdt"  to="/request-demo">
                              Request Demo          
                           </Link>
                        </div>
                        <div className="mt-3 text-center">
                           <Link className="btn theme-color px-4 py-2 theme-btn-white btn-wdt" to="/our-story">
                              Our Story      
                           </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>   

        <section className="pt-5 pb-5 our-campion-section">
         <div className="container">
            <div className="section-title text-center ">
               <h2 className="mb-4">Our Champions</h2>
             </div>            
            <div className="row our-campion-row">
               <div className="col p-2 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <img src="assets/images/CreditKarma.png"/>
                  <div className="py-3">
                     <img src="assets/images/Colleen McCreary.png" width="110" height="110"/>
                  </div>
                  <h6 className="font-weight-bold">Colleen McCreary</h6>
                  <p className="tertiary-color">Chief People Officer</p>
               </div>
               <div className="col p-2 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <img src="assets/images/Gainsight.png"/>
                  <div className="py-3">
                     <img src="assets/images/Carol Mahoney.png" width="110" height="110"/>
                  </div>
                  <h6 className="font-weight-bold">Carol Mahoney</h6>
                  <p className="tertiary-color">Chief People Officer</p>
               </div>
               <div className="col p-2 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <img src="assets/images/Birchbox.png"/>
                  <div className="py-3">
                     <img src="assets/images/Melissa Kaplan Enbar.png" width="110" height="110"/>
                  </div>
                  <h6 className="font-weight-bold">Melissa Kaplan Enbar</h6>
                  <p className="tertiary-color">VP, People & Culture</p>
               </div>
               <div className="col p-2 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <img src="assets/images/Guardant.png"/>
                  <div className="py-3">
                     <img src="assets/images/Amelia Merrill.png" width="110" height="110"/>
                  </div>
                  <h6 className="font-weight-bold">Amelia Merrill</h6>
                  <p className="tertiary-color">VP, People</p>
               </div>
               <div className="col p-2 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <img src="assets/images/Segment.png"/>
                  <div className="py-3">
                     <img src="assets/images/Adriana Roche.png" width="110" height="110"/>
                  </div>
                  <h6 className="font-weight-bold">Adriana Roche</h6>
                  <p className="tertiary-color">VP, People & Places</p>
               </div>
               <div className="col p-2 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <img src="assets/images/onDeck.png"/>
                  <div className="py-3">
                     <img src="assets/images/Deb Stroff.png" width="110" height="110"/>
                  </div>
                  <h6 className="font-weight-bold">Deb Stroff</h6>
                  <p className="tertiary-color">Chief People Officer</p>
               </div>
            </div>
         </div>
      </section>      
        
        <section className="pt-5 pb-5 bg-light-gray">
         <div className="container">
            <div className="section-title text-center mb-4">
               <h2 className="mb-4 primary-color">Built by CPOs, for CPOs</h2>
               <p className="secondary-color">We spoke to 100s of CPOs before building our best-in-className dashboard 
               that provide you analytics from day one. Use Twine to prep for your next 
                board meeting, perfect 1:1s, and have the answer to one-off questions.</p>
             </div>
            <div className="">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="vertical-tab show-desktop">
                     <ul className="nav">
                           <li className="tablinks active" section="Section1">
                              <div className="media">
                                 <img className="mr-3" src="assets/images/Recruiting.svg" alt="Generic placeholder image"/>
                                 <div className="media-body">
                                    <h5 className="mt-0 font-weight-bold primary-color">Manage your recruiting pipeline</h5>
                                    <p className="f-16 secondary-color mb-0 active">How effective is our hiring process?</p>
                                 </div>
                              </div>
                           </li>
                           <li className="tablinks" section="Section2">
                              <div className="media">
                                 <img className="mr-3" src="assets/images/Workforce.svg" alt="Generic placeholder image"/>
                                 <div className="media-body">
                                    <h5 className="mt-0 font-weight-bold primary-color">Plan your workforce</h5>
                                    <p className="f-16 secondary-color mb-0">Are we doing enough to drive diversity?</p>
                                 </div>
                              </div>
                           </li>
                           <li className="tablinks" section="Section3">
                              <div className="media">
                                 <img className="mr-3" src="assets/images/Performance.svg" alt="Generic placeholder image"/>
                                 <div className="media-body">
                                    <h5 className="mt-0 font-weight-bold primary-color">Track top performers</h5>
                                    <p className="f-16 secondary-color mb-0">Are we fairly compensating our top performers?</p>
                                 </div>
                              </div>
                           </li>
                           <li className="tablinks" section="Section4">
                              <div className="media">
                                 <img className="mr-3" src="assets/images/Compensation.svg" alt="Generic placeholder image"/>
                                 <div className="media-body">
                                    <h5 className="mt-0 font-weight-bold primary-color">Monitor compensation parity </h5>
                                    <p className="f-16 secondary-color mb-0">Is there pay parity across the company?</p>
                                 </div>
                              </div>
                           </li>
                           <li className="tablinks" section="Section5">
                                 <div className="media">
                                    <img className="mr-3" src="assets/images/Attrition.svg" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                       <h5 className="mt-0 font-weight-bold primary-color">Oversee attrition trends</h5>
                                       <p className="f-16 secondary-color mb-0">Are there any systemic company trends driving employee turnover? </p>
                                    </div>
                                 </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-6 text-center show-desktop">
                     <div className="vertical-tab-img wow fadeInLeft">
                        <div className="tabcontent" style={{ display: 'block' }} id="Section1">
                           <img src="assets/images/Recruiting Screen.png"/>
                        </div>
                        <div className="tabcontent" id="Section2">
                           <img src="assets/images/Workforce - Screen.png"/>
                        </div>
                        <div className="tabcontent" id="Section3">
                           <img src="assets/images/Performance - screen.png"/>
                        </div>
                        <div className="tabcontent" id="Section4">
                           <img src="assets/images/Compensation - Screen.png"/>
                        </div>
                        <div className="tabcontent" id="Section5">
                           <img src="assets/images/Attrition - Screen.png"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>      
        
        <section className="pt-5 pb-5">
         <div className="container">
            <div className="section-title text-center mb-4">
               <h2 className="mb-4 primary-color">Go Deeper &nbsp;<img src="assets/images/arrow.png" width="20"/></h2>
               <p className="secondary-color">Twine was built to be a CPO’s playground. Click into just about anything to<br/> dive deeper into the data.</p>
             </div>
            <div className="row">
               <div className="col-sm-12 text-center">
                  <img src="assets/images/Go Deeper Video.png" className="resp_video wow fadeInUp"/>
               </div>
            </div>
         </div>
      </section>   
        
        <section className="pt-5 pb-5 bg-blue">
        <div className="container">
            <div className="section-title text-white text-center mb-4">
               <h2 className="mb-2">Make Twine your single source of truth</h2>
               <p>Twine integrates with 15+ HR systems to create your “single source of truth” around all employee records.</p>
             </div>
           <ul className="logo-list">
               <li className="logo"><img src="assets/images/BambooHR.png"/></li>
               <li className="logo"><img src="assets/images/ADP.png"/></li>
               <li className="logo"><img src="assets/images/Workday.png"/></li>
               <li className="logo"><img src="assets/images/Greenhouse.png"/></li>
               <li className="logo"><img src="assets/images/Namely.png"/></li>            
               <li className="logo"><img src="assets/images/Reflektive.png"/></li>
               <li className="logo"><img src="assets/images/Lever.png"/></li>               
               <li className="logo"><img src="assets/images/Justworks.png"/></li>          
            </ul>
        </div>
      </section>      
        
        <section className="pt-5 pb-5 testimonial_section">
         <div className="container">
            <div className="row align-items-center">               
               <div className="col-lg-6 text-center order-lg-2 mb-3">
                  <div className="testimonial_img position-relative wow fadeInRight" data-wow-delay="0.2s">
                     <img src="assets/images/segment-img.png" width="350px"/>
                  </div>
               </div>
               <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="0.2s">
                  <h3 className="font-weight-bold txt-resp-center">
                     <img src="assets/images/partner-segment-logo.png" height="30px" />
                  </h3>
                  <p className="f-18 secondary-color txt-resp-center mb-4"><i>
                  “Twine did for our people analytics function<br/> in 2 months what we thought would<br/> take a year. They help people teams <br/>become as data-driven as revenue teams.”</i>
                  </p>
                  <h4 className="font-weight-bold mt-4 primary-color txt-resp-center">Adriana Roche</h4>
                  <p className="f-16 secondary-color txt-resp-center">Head of People at Segment</p>
               </div>
            </div>
         </div>
      </section>      
        
        <section className="pt-5 pb-5 bg-light-gray">
         <div className="container text-center">
            <div className="section-title text-center mb-4">
               <h2 className="mb-2">Leading CPOs use Twine </h2>
               <p className="secondary-color">Reach out to learn more about how Twine can<br/> solve your people analytic needs.</p>
             </div>
               <Link className="btn theme-btn-blue btn-wdt"  to="/request-demo">
                  Request Demo          
               </Link>
         </div>
      </section>
    </div>
  );
}

export default Home;
