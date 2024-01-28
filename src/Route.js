import React from 'react';
import './index.css';
import {Routes,Route} from "react-router-dom"
import Home from './Home';
import AboutUs from './AboutUs';
import Service from './Service';
import Product from './Product';
import CoreValues from './CoreValues';
import BlogSection from './BlogSection';
import GetInTouch from './GetInTouch';
import Navbar from './Navbar';
import App from './App';


export default function Routing(){
    return(


<>
        <Navbar/>
    <Routes>
        <Route path='/'element={<App/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>
        <Route path='/service'element={<Service/>}/>
        <Route path='/product'element={<Product/>}/>
        <Route path='/corevalues'element={<CoreValues/>}/>
        <Route path='/contactus'element={<GetInTouch/>}/>
        <Route path='/blogs'element={<BlogSection/>}/>
      </Routes>

  
      </>
  )
}

