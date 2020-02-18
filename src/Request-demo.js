import React from 'react';
import Form from './Form';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function RequestDemo() {
  return (
    <div className="Request-demo">           
        <section className="bg-light-gradient pt-5 pb-5 bg-light-gray form-section">
            <div className="container-fluid">
                <div className="site-form">
                    <h3>Request Demo</h3>
                    <p>Let Twine serve as your “single source of truth.</p>
                    <Form onChange={fields => this.onChange(fields)} />
                </div>
            </div>
        </section>   
    </div>
  );
}

export default RequestDemo;
