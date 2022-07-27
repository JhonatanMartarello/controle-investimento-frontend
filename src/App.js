import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import Papel from './pages/papel';
import Posicao from './pages/posicao';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Proventos from './pages/proventos';

const App = props => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/papel" exact element={<Papel/>}/>
        <Route path="/proventos" exact element={<Proventos/>}/>
        <Route path="/posicao" exact element={<Posicao/>}/>
        <Route path="/sign-up" exact element={<SignUp/>}/>
        <Route path="/sign-in" exact element={<SignIn/>}/>
      </Routes>         
    </Router>
    
  )
};
export default App;
