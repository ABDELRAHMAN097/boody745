import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function LayOut() {
  return (
    <div>
      <Navbar/>
      <div className='contaner'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
