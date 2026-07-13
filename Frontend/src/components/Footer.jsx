import React from 'react'
import style from './Footer.module.css'
import scanner from '../assets/scan.png'
import Apple from '../assets/applelogo.png'
import Google from '../assets/google.png'

import { FaBaby, FaPhone } from 'react-icons/fa'
import { FaCartArrowDown } from 'react-icons/fa6'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons/faPaperPlane'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.Footer1}>
          <h1>Exclusive</h1>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className={style.inputWrap}>
            <input type="email" name='email' placeholder='Enter your email'/>
            <FontAwesomeIcon icon={faPaperPlane}/>
          </div>
        </div>
        <div className={style.Footer2}>
          <h2>Support</h2>
          <p>No 6, kapwa okada park lugbe abuja</p>
          <p>exclusive@gmail.com</p>
          <p>+2348026672774</p>
        </div>
        <div className={style.Footer3}>
          <h2>Account</h2>
          <a href="#">My Account</a>
          <a href="#">Login / Register</a>
          <a href="#">Cart</a>
          <a href="#">Wishlist</a>
          <a href="#">Shop</a>
        </div>
        <div className={style.Footer4}>
          <h2>Quick Link</h2>
          <a href="#">Privacy Policy</a>
          <a href="#">Term Of Use</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
        <div className={style.Footer5}>
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className={style.appinfo}>
            <div className={style.appscan}>
              <img src={scanner} alt="" />
            </div>
            <div>
              <div className={style.appdownload}>
                <img src={Google} alt="" />
                <div>
                  <p>Get it on</p>
                  <h5>Google Play</h5>
                </div>
              </div>
              <div className={style.appdownload}>
                <img src={Apple} alt="" />
                <div>
                  <p>Download on the</p>
                  <h5>Apple Store</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={style.icon}>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faX}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faLinkedin}/>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <hr />
        <p>© Afolabi Victory {year}. All right reserved </p>
      </div>
    </div>
  )
}

export default Footer
