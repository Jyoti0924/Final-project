import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home"
import About from "./components/about/about"
import Helpsupport from "./components/help&support/help&support"
import Signup from "./components/signup/signup"
import Login from "./components/login/login"
import Termsconditions from "./components/terms&conditions/terms&conditions"
import Team from "./components/team/team"
import Rooms from './components/rooms/rooms';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/help&support' element={<Helpsupport/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/terms&conditions' element={<Termsconditions/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/rooms' element={<Rooms/>} />

      </Routes>
    </Router>
  );
}
  
export default App;