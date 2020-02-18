import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Careers() {
  return (
    <div>
       <section className="bg_career"> 
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12 title text-center position-relative">
                  <div className="career_div wow fadeInUp">
                     <h1 className="heading_1 font-weight-bold text-white mb-0">We’re Hiring!</h1>
                     <h5 className="text-white mb-0 my-4">Help us change the way people decisions are made</h5>
                     <Link to="/careers#current-opening" className="btn career-btn text-white btn-large">View Openings</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-5 our_values">
         <img src="assets/images/rotate-img.svg" id="leftgear" style={{transition: "all 0.4s ease-in-out"}}/>
         <div className="container">
            <div className="section-title text-center mb-4">
               <h2 className="mb-2">Our values</h2>
               <p className="secondary-color">We’re a mission-oriented organization focused on creating a best-in-className team.</p>
            </div>
            <div className="row">
               <div className="col-lg-12">
                  <ul className="list_none pl-0">
                     <li className="wow fadeInLeft">
                        <div className="value_list_li box1">
                           <h4 className="mt-0 font-weight-bold primary-color">Positive impact on others</h4>
                           <p className="f-16 secondary-color mb-0">Empower and drive the team to be better in all interactions.</p>
                        </div>
                     </li>
                     <li className="d-flex justify-content-end wow fadeInRight">
                        <div className="value_list_li box2">
                           <h4 className="mt-0 font-weight-bold primary-color">Intelectual curiosity + humility</h4>
                           <p className="f-16 secondary-color mb-0">Be a “learn-it-all,” not a know-it-all.</p>
                        </div>
                     </li>
                     <li className="wow fadeInLeft">
                        <div className="value_list_li box3">
                           <h4 className="mt-0 font-weight-bold primary-color">Continuous improvement</h4>
                           <p className="f-16 secondary-color mb-0">Look to improve yourself, others, and the company. </p>
                        </div>
                     </li>
                     <li className="d-flex justify-content-end wow fadeInRight">
                        <div className="value_list_li box4">
                           <h4 className="mt-0 font-weight-bold primary-color">Relentless resourcefulness</h4>
                           <p className="f-16 secondary-color mb-0">Be willing to roll up your sleeves and contribute any way possible. </p>
                        </div>
                     </li>
                     <li className="wow fadeInLeft">
                        <div className="value_list_li box5">
                           <h4 className="mt-0 font-weight-bold primary-color">Focus on winning</h4>
                           <p className="f-16 secondary-color mb-0">Believe in extraordinary outcomes and focus on being your best.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <section className="py-5 bg-light-gray current_opening" id="current-opening">
         <div className="container">
            <div className="section-title text-center mb-4">
               <h2>Current Openings</h2>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-6">
                  <ul className="list_none">
                     <li>
                        <h4>Engineering</h4>
                     </li>
                     <li className="mt-4">
                        <a href="#" className="">Full-Stack Engineer</a>
                        <p className="f-16">New York, NY</p>
                     </li>
                     <li className="">
                        <a href="#" className="">Product Engineer</a>
                        <p className="f-16">New York, NY</p>
                     </li>
                     <li className="">
                        <a href="#" className="">Senior Front-End Engineer</a>
                        <p className="f-16">New York, NY</p>
                     </li>
                     <li className="">
                        <a href="#" className="">Senior Front-End Engineer</a>
                        <p className="f-16">New York, NY</p>
                     </li>
                     <li className="">
                        <a href="#" className=""><u>Full-Stack Engineer</u></a>
                        <p className="f-16">New York, NY</p>
                     </li>
                  </ul>
               </div>
               <div className="col-lg-4 col-sm-6">
                  <ul className="list_none">
                     <li>
                        <h4>Sales</h4>
                     </li>
                     <li className="mt-4">
                        <a href="#" className="">Strategic Account Executive</a>
                        <p className="f-16">New York, NY, San Francisco, CA</p>
                     </li>
                     <li className="">
                        <a href="#" className="">Lead Outbound Sales Associate</a>
                        <p className="f-16">New York, NY</p>
                     </li>
                  </ul>
               </div>
               <div className="col-lg-4 col-sm-12">
                  <ul className="list_none">
                     <li>
                        <h4>Design</h4>
                     </li>
                     <li className="mt-4">
                        <a href="#" className="">Senior Product Designer</a>
                        <p className="f-16">New York, NY, San Francisco, CA</p>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="title text-center show-desktop">
               <hr/>
               <p className="mt-5">Don’t see the job you’re looking for? <a href="mailto:jobs@twinelabs.com">Contact us!</a></p>
            </div>
         </div>
      </section>
    </div>
  );
}

export default Careers;
