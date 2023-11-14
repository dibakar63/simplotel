import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillCartFill} from 'react-icons/bs'
const Navbar = () => {
  window.addEventListener("scroll",function(){
    const header=document.querySelector(".navbar");
  //when the scroll is higher than 200 viewport height,add the scroll-header class to a tag with the scroll-top class
    if(this.scrollY >= 80)header.classList.add('scroll-navbar');

    else header.classList.remove('scroll-navbar');

})
/*===Toggle Menu====*/
const [Toggle,showMenu]=useState(false);
const[activeNav,setActiveNav]=useState('#home');
  return (
    <div className='navbar'>
    <ul className={Toggle ? "navbar_ul show-menu" :"navbar_ul"}>
        <li>Home</li>
        <li>Order</li>
        <li>Food</li>
        <li>Restaurant</li>
        <li>Testimonals</li>
        <li>Contact Us</li>
    </ul>

    <div className='navbar_icons'>
        <BsFillTelephoneFill className='telephone'/>
        <BsFillCartFill/>
    </div>
    
      
    </div>
  )
}

export default Navbar
