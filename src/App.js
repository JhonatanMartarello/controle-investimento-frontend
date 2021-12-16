import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import ContactUs from './pages/contact-us';
import Service from './pages/service';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

const App = props => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/services" exact element={<Service/>}/>
        <Route path="/contact-us" exact element={<ContactUs/>}/>
        <Route path="/sign-up" exact element={<SignUp/>}/>
        <Route path="/sign-in" exact element={<SignIn/>}/>
      </Routes>   
    </Router>
  )
};
export default App;
