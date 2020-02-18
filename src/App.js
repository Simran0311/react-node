import React, { Component } from "react";
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Careers from './Careers';
import OurStory from './Our-story';
import RequestDemo from './Request-demo';
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import './App.css';
import { BrowserRouter, Route,BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">

        <Router>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/careers" component={Careers}/>
          <Route path="/our-story" component={OurStory}/>
          <Route path="/Request-demo" component={RequestDemo}/>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
