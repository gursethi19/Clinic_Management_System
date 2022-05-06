import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Index from './components/Index'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import UserLogin from './components/UserLogin'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Doctors from'./components/Doctors'
import Footer from './components/Footer'
import AdminDashboard from './components/AdminDashboard'
import AdminLogin from './components/AdminLogin'
import UserDashboard from './components/UserDashboard'
import AllReg from './components/AllReg'
import AllApp from './components/AllApp'



function App() {
  return (
      <div>


        


          <Router> 
            <Navbar />  
            <Switch>
              <Route exact path="/" component={Header} />
              <Route  path="/reg" component={Register} />
              <Route  path="/about" component={AboutUs} />
              <Route  path="/contact" component={ContactUs} /> 
              <Route  path="/userlogin" component={UserLogin} />
              <Route  path="/userdashboard" component={UserDashboard} /> 
              <Route  path="/admindashboard" component={AdminDashboard} /> 
              <Route  path="/adminlogin" component={AdminLogin} /> 
              <Route  path="/allreg" component={AllReg} /> 
              <Route  path="/allapp" component={AllApp} /> 
              
            </Switch>
          </Router>
         
          <Footer/>

         
      </div>
  )
}


export default App;
