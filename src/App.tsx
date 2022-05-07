import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { render } from "react-dom";





function App() {

  return (
    <div className='app-wriper'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' />} />
        <Route path='profile' element={<Profile title='Profile' />} />
      </Routes>
    </div>
  )
}



export default App;

// return (
//   <div className='app-wriper'>
//     <Header />
//     <Navbar />
//     <div className='app-wriper-content'>
//       <Route path='/dialogs' element={<Dialogs title='Dialogs' />} />
//       <Route path='/profile' element={<Profile title='Profile' />} />
//     </div>
//   </div>
// )