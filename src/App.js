import React from 'react';
import {
  BrowserRouter as Router,
  
  Route, Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.js";
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Switch> */}
      <Routes>
        <Route path='/' exact component={Home} />
        </Routes>
      {/* </Switch> */}
    </Router>
    </>
  );
}

export default App;
