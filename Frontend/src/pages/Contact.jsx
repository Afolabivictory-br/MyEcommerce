import React from 'react'
import style from '../pages/Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
  return (
    <div>
      <div className={style.contactGrid}>
        <div className={style.contactInfo}>
          <div className={style.iconWrap}><FontAwesomeIcon className={style.icon} icon={faPhone} /> Call Us</div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +2348024472774</p>
          <hr />
          <div className={style.iconWrap}><FontAwesomeIcon className={style.icon} icon={faEnvelope}/> Write To Us</div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
        <div className={style.message}>
          <div className={style.inputWrap}>
            <input type="text" name="name" id="name" placeholder='Your Name *' />
            <input type="email" name="email" id="email" placeholder='Your Email *' />
            <input type="tel" name="phone" id="tel" placeholder='Your Phone *' />
          </div>
          <textarea placeholder='Your Message'></textarea>
          <button type="submit">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
