import React, { useState } from 'react'
import style from './TopHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [changeLang, setChangeLang] = useState("English")

  return (
    <div className={style.TopHeader}>
        <div className={style.TopHeadertext}>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <a href="#">ShopNow</a>
        </div>
        <div className={style.lang}>
            <p>
                {changeLang}
                {
                  isOpen ?
                  < FontAwesomeIcon className={style.chevronUp} icon={faChevronUp} onClick={() => setIsOpen(false)}/> 
                  :
                  < FontAwesomeIcon className={style.chevronDown} icon={faChevronDown} onClick={() => setIsOpen(true)} />
                }
            </p>

            { isOpen &&
              <div className={style.dropDown}>
                  <p onClick={() => setChangeLang('English')}>English</p>
                  <p onClick={() => setChangeLang('French')}>French</p>
                  <p onClick={() => setChangeLang('Spanish')}>Spanish</p>
                  <p onClick={() => setChangeLang('Chinese')}>Chinese</p>
                  <p onClick={() => setChangeLang('Japanese')}>Japanese</p>
              </div>
            }
        </div>
    </div>
  )
}

export default TopHeader
