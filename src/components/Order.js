import React from 'react'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Order = () => {
  return (
    <div className='order_page'>
      <h1 className='order_title'>Order</h1>
      <div className='orders'>
        <div className='card'>
            <img src={img2} className='card_img'/>
            <h1>Burger</h1>
            <p>Lorem Ipsum has been the
industry's standard dummy text
</p>
        </div>
        <div className='card'>
            <img src={img3} className='card_img'/>
            <h1>Pizza</h1>
            <p>Lorem Ipsum has been the
industry's standard dummy text
</p>
        </div>
        <div className='card'>
            <img src={img4} className='card_img'/>
            <h1>Pasta</h1>
            <p>Lorem Ipsum has been the
industry's standard dummy text
</p>
        </div>
        <button>Order</button>
      </div>
      <div className='btn'>
        
      </div>
    </div>
  )
}

export default Order
