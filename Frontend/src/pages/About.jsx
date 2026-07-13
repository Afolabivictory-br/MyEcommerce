import React from 'react'
import style from '../pages/About.module.css'
import SubFooter from '../components/SubFooter'
import AboutImg from '../assets/aboutImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faDollar, faDollarSign, faMoneyBill, faShop, faX } from '@fortawesome/free-solid-svg-icons'
import Founder from '../assets/man1.png'
import MD from '../assets/woman1.png'
import PD from '../assets/man2.png'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className={style.aboutPage}>
      <div className={style.about}>
        <div className={style.aboutText}>
          <h2>Our Story</h2>
          <p>Launced in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladash. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.</p>
          <p>Exclusive has more than 1 million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer</p>
        </div>
        <div className={style.aboutImg}>
          <img src={AboutImg} alt="" />
        </div>
      </div>
      <div className={style.aboutRecord}>
        <div className={style.subRecord}>
            <div className={style.iconWrapper}>
                <FontAwesomeIcon className={style.icon} icon={faShop}/>
            </div>
            <h2>10.5k</h2>
            <p>Sellers active on our site</p>
        </div>
        <div className={style.subRecord}>
            <div className={style.iconWrapper}>
                <FontAwesomeIcon className={style.icon} icon={faDollarSign}/>
            </div>
            <h2>33k</h2>
            <p>Monthly Product Sale</p>
        </div>
        <div className={style.subRecord}>
            <div className={style.iconWrapper}>
                <FontAwesomeIcon className={style.icon} icon={faBagShopping}/>
            </div>
            <h2>45.5k</h2>
            <p>Customers active on our site</p>
        </div>
        <div className={style.subRecord}>
            <div className={style.iconWrapper}>
                <FontAwesomeIcon className={style.icon} icon={faMoneyBill}/>
            </div>
            <h2>25k</h2>
            <p>Annual gross sale in our site</p>
        </div>
      </div>
      <div className={style.founders}>
        <div className={style.foundersInfo}>
          <div className={style.foundersImg}>
            <img src={Founder} alt="" />
          </div>
          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <br />
          <div className={style.foundersHandle}>
            <FontAwesomeIcon icon={faX} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>    
        </div>
        <div className={style.foundersInfo}>
          <div className={style.foundersImg}>
            <img src={MD} alt="" />
          </div>
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <br />
          <div className={style.foundersHandle}>
            <FontAwesomeIcon icon={faX} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>    
        </div>
        <div className={style.foundersInfo}>
          <div className={style.foundersImg}>
            <img src={PD} alt="" />
          </div>
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <br />
          <div className={style.foundersHandle}>
            <FontAwesomeIcon icon={faX} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>    
        </div>
      </div>
      <SubFooter />
    </div>
  )
}

export default About
