import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempora et consequuntur, est voluptate corporis sit facere 
                    eaque reprehenderit. Harum temporibus fuga quod laborum, ab quasi, 
                    nihil nam enim nulla, numquam necessitatibus doloremque voluptatibus 
                    quaerat. Quasi, perferendis, libero quibusdam magnam exercitationem 
                    cupiditate suscipit quia voluptatum consequuntur ipsum adipisci molestiae rem eligendi.</p>
                  <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                  </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1_292-244-2334</li>
                    <li>priya@food.com</li>
                </ul>

            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Foot.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer