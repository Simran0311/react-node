import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function OurStory() {
  return (
  <div><section className="bg_our_story">
    <div className="container-fluid">
       <div className="row">
          <div className="col-lg-12 title text-center position-relative">
             <div className="story_div wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="text-white mb-3">It all started with a question ...</h5>
                <h1 className="heading_1 font-weight-bold text-white mb-0 mt-5">"What is the single piece of software you need?"</h1>
             </div>
          </div>
       </div>
    </div>
 </section>

 <section className="pt-5 pb-5 bg-light-gray our_story">
    <div className="container">
        <div className="section-title text-center wow fadeInUp">
          <h2 className="mb-4">Our Story</h2>
          <p className="primary-color">
           <i>
             Twine is building a category-defining people analytics product that provides a single source of truth and analytics for People data.

             <br/> <br/> 
             The goal? 
             <br/> <br/> 
             <strong>To help People teams become as data-driven as sales and marketing.</strong>
             <br/> <br/> 
             In the early days, Twine co-founders Joseph and Nikhil conducted research with Adam Grant, one of Wharton’s leading professors. The group’s research surfaced two powerful insights...
           </i>
          </p>
          <p id="less"><i>
             1. People Tech is fragmented, with data spread across multiple systems. As a result, companies can’t run true people analytics.
             <br/> <br/> 
             2. Second, forward-thinking companies are increasingly turning to Chief People Officers to make sense of their People data and drive strategic business decisions. 
             <br/> <br/> 
             Joseph and Nikhil launched Twine with a dozen CPOs from leading companies like Credit Karma, Gainsight, OnDeck, and Guardant Health. They obsessively focused on the needs of Chief People Officers gathering feedback and iterating quickly on the product. 
            <br/> <br/> 
             They have since built a powerful platform for centralizing and analyzing People data. The team at Twine is continuing to grow, adding new engineers and business minds to help bring about a “single source of truth” for all People data.
             </i>
          </p>
          <button type="button" id="show" className="theme-color font-weight-bold f-14 btn_more">
             Read More <br/>
             <img src="assets/images/down_arrow.svg"/>
          </button>
          <button type="button" id="hide" className="theme-color font-weight-bold f-14 btn_more">Read Less
           <br/><img src="assets/images/up_arrow.svg"/>
          </button> 
        </div>
    </div>
 </section>

 <section className="py-5 Our_founders">
    <div className="container">
       <div className="section-title text-center">
          <h2 className="mb-4">Our Founders </h2>
       </div>
       <div className="row px-sm-5 py-sm-3 px-0 position-relative">
          <div className="col-sm-6 text-center bdr-right wow fadeInLeft" data-wow-delay="0.2s">
             <div className="py-3 d-flex justify-content-around">
                <img src="assets/images/Joseph.png" width="" height=""/>
             </div>
             <h6 className="font-weight-bold primary-color">Joseph Quan</h6>
             <p className="f-16 tertiary-color font-weight-bold">Co-Founder & CEO</p>
          </div>
          <div className="col-sm-6 text-center wow fadeInRight" data-wow-delay="0.2s">
             <div className="py-3 d-flex justify-content-around">
                <img src="assets/images/Nikhil.png" width="" height=""/>
             </div>
             <h6 className="font-weight-bold primary-color">Nikhil Srivastava</h6>
             <p className="f-16 tertiary-color font-weight-bold">Co-Founder & CTO</p>
          </div>
       </div>
    </div>
 </section>

 <section className="pt-5 pb-5 bg-light-gray our-campion-section">
    <div className="container">
       <div className="section-title text-center">
          <h2 className="mb-2">Our Investors</h2>
          <p className="secondary-color">Some of the thought leaders and visionaries backing Twine.</p>
        </div>
       
       <div className="row our-campion-row our-invertor-row">
          <div className="col p-3 text-center wow fadeInUp" data-wow-delay="0.2s">
             <div className="py-3">
                <img src="assets/images/adam_grant.png" width="110" height="110"/>
             </div>
             <h6 className="font-weight-bold">Adam Grant</h6>
             <p className="tertiary-color">Wharton Professor <br/>2x NYT Best-Seller</p>
          </div>
          <div className="col p-3 text-center wow fadeInUp" data-wow-delay="0.2s">
             <div className="py-3">
                <img src="assets/images/pamela_thomas_graham.png" width="110" height="110"/>
             </div>
             <h6 className="font-weight-bold">Pamela Thomas-Graham</h6>
             <p className="tertiary-color">Fortune 500 Board Member</p>
          </div>
          <div className="col p-3 text-center  wow fadeInUp" data-wow-delay="0.2s">
             <div className="py-3">
                <img src="assets/images/sarah_smith.png" width="110" height="110"/>
             </div>
             <h6 className="font-weight-bold">Sarah Smith</h6>
             <p className="tertiary-color">BCV Partner</p>
          </div>
          <div className="col p-3 text-center wow fadeInUp" data-wow-delay="0.2s">
             <div className="py-3">
                <img src="assets/images/ross_mason.png" width="110" height="110"/>
             </div>
             <h6 className="font-weight-bold">Ross Mason</h6>
             <p className="tertiary-color">Mulesoft Founder</p>
          </div>
          <div className="col p-3 text-center wow fadeInUp" data-wow-delay="0.2s">
             <div className="py-3">
                <img src="assets/images/trinity_logo.svg" width="110" height="110"/>
             </div>
             <h6 className="font-weight-bold">Trinity Ventures</h6>
             <p className="tertiary-color">Leading B2B SaaS VC</p>
          </div>
       </div>
    </div>
 </section>

 <section className="pt-5 pb-5">
    <div className="container text-center">
       <div className="section-title text-center mb-4">
          <h2 className="mb-2">Join Us</h2>
          <p className="secondary-color">We’re on a mission to change how people data is used. </p>
        </div>
        <Link className="btn theme-btn-blue btn-wdt" to="/careers#current-opening">
        View Openings          
        </Link>
    </div>
 </section>
 </div>
  );
}

export default OurStory;
