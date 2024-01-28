import React from 'react';
import './Product.css'; 
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Product() {
  return (
    <>
    <h1>Products</h1>
    <div className='Pro'>
        
      <div className='ProBox'>
        <div className='Pro1'>
          <h1>22W USB charger socket</h1>
          <h4>Increase consumer productivity and reduce charge anxiety</h4>
          <div className='Cart'>
          <ShoppingCartOutlinedIcon />
          </div>
          <img src='https://img2.exportersindia.com/product_images/bc-full/2023/10/12687155/mavolo-rus-1698399745_7147207_1940144.jpg'/>
          
        </div>
        <div className='Pro2'>
          <h1>12W USB charger socket</h1>
          <h4>Increase consumer productivity and reduce charge anxiety</h4>
          <div className='Cart'>
          <ShoppingCartOutlinedIcon />
          </div>
          <img src='https://5.imimg.com/data5/SELLER/Default/2023/10/352693383/TP/BX/PT/85281307/mavolo-single-port-usb-charger-socket-500x500.jpg'/>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Product;
