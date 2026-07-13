import React from 'react'
import style from '../components/SubFooter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-regular-svg-icons'
import { faHeadset, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const SubFooter = () => {
  return (
    <div className={style.subFooter}>
        <div className={style.subFooterbody}>
            <div className={style.iconWrapper}>
                <FontAwesomeIcon className={style.icon} icon={faTruck}/>
            </div>
            <h2>free and fast delivery</h2>
            <p>Free delivery for all orders over $140</p>
        </div>
        <div className={style.subFooterbody}>
            <div className={style.iconWrapper}>
                <FontAwesomeIcon className={style.icon} icon={faHeadset}/>
            </div>
            <h2>24/7 customer service</h2>
            <p>Friendly 24/7 customer service</p>
        </div>
        <div className={style.subFooterbody}>
            <div className={style.iconWrapper}>
                <FontAwesomeIcon className={style.icon} icon={faShieldAlt}/>
            </div>
            <h2>money back guarantee</h2>
            <p>We return money within 30 days</p>
        </div>
    </div>
  )
}

export default SubFooter