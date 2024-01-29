import React from 'react';
import './Product.css'; 
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import  product1 from './Images/Upto (7).png';
import  product2 from './Images/product2.png';
import Typography  from '@mui/material/Typography';
function Product() {
  return (
    <>
    <h1>Products</h1>
    <div className='Pro'>
        
      <div className='ProBox'>
        <div className='Pro1'>
          <h1 className="text-white text-start heading" style={{width:"325px"}} >22W USB charger socket</h1>
          <Typography variant='h6'  style={{width:"325px"}}>Increase consumer productivity and reduce charge anxiety</Typography>
          </div>
        

          
          <div className='Cart'>
          <ShoppingCartOutlinedIcon style={{fontSize:'2rem', marginLeft:'25px', marginTop:"5px"}}/>
          </div>
        
          <img  className='images' src={product1} alt= 'phone' />
          
        
        <div className='Pro2'>
          <h1 className="text-white text-start heading" style={{width:"325px"}}>12W USB charger socket</h1>
          <Typography variant='h6'  style={{width:"325px"}}>Increase consumer productivity and reduce charge anxiety</Typography>
         </div>
          <div className='Cart2'>
          <ShoppingCartOutlinedIcon style={{fontSize:'2rem', marginLeft:'25px', marginTop:"5px"}}/>
          </div>
          
          <img src={product2} alt='product' className='images2' />
          
        
      </div>
    </div>
    </>
  );
}

export default Product;
