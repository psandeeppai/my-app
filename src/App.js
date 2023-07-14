import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Home from "./components/Home"
// import About from "./components/About"
// import Contact from "./components/Contact"
// import NavBar from "./components/NavBar"
// // import { Dropdown} from 'bootstrap';
// import Signup from "./components/Signup"
// import Login from "./components/Login"


function App(){
  return(
    // <div>
    //   <h1>Today is react Class</h1>

    // </div>
    //fragment method
    // <>
    // <h1 className='bg-info'>Today is react class</h1>
    // <p className='bg-danger'>this is a paragraph</p>
    // </>
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App

