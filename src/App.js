import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import home from './components/pages/home';
import about from './components/pages/about';
import helpsupport from './components/pages/help&support';
import signup from './components/pages/signup';
import login from './components/pages/login';
import termsconditions from './components/pages/terms&conditions';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={home} />
        <Route path='/about' component={about} />
        <Route path='/help&support' component={helpsupport} />
        <Route path='/signup' component={signup} />
        <Route path='/login' component={login} />
        <Route path='/terms&conditions' component={termsconditions} />
      </Routes>
    </Router>
  );
}
  
export default App;