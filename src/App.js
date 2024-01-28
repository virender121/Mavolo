import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Service from './Service';
import Product from './Product';
import Client from './Client';
import CoreValues from './CoreValues';
import BlogSection from './BlogSection';
import GetInTouch from './GetInTouch';

function App() {
  return (
    <div className="App">

      
     
      <Home/>
      <AboutUs/>
      <Service/>
      <Product/>
      <Client/>
      <CoreValues/>
      <GetInTouch/>
      <BlogSection/>
    </div>
  );
}

export default App;
