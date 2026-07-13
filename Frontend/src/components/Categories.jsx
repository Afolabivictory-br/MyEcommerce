import React from 'react'
import style from '../components/Categories.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons/faMobile'
import { faComputer } from '@fortawesome/free-solid-svg-icons/faComputer'
import { faCamera } from '@fortawesome/free-regular-svg-icons/faCamera'
import { faTelevision } from '@fortawesome/free-solid-svg-icons/faTelevision'
import { faHeadphones } from '@fortawesome/free-regular-svg-icons/faHeadphones'
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad'

const Categories = () => {
  return (
      <div className={style.cart}>
        <div className={style.title}>
          <div className={style.design}></div>
          Categories
        </div>
        <h2>Browse By Category</h2>
        <div className={style.categories}>
          <div className={style.category}>
            <FontAwesomeIcon icon={faMobile}/>
            <p>Phones</p>
          </div>
          <div className={style.category}>
            <FontAwesomeIcon icon={faComputer}/>
            <p>Computers</p>
          </div>
          <div className={style.category}>
            <FontAwesomeIcon icon={faCamera}/>
            <p>Camera</p>
          </div>
          <div className={style.category}>
            <FontAwesomeIcon icon={faTelevision}/>
            <p>Television</p>
          </div>
          <div className={style.category}>
            <FontAwesomeIcon icon={faHeadphones}/>
            <p>HeadPhone</p>
          </div>
          <div className={style.category}>
            <FontAwesomeIcon icon={faGamepad}/>
            <p>Gaming</p>
          </div>
        </div>
      </div>
  )
}

export default Categories
