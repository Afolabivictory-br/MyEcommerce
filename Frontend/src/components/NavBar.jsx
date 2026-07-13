import React, { useContext, useState } from 'react'
import style from './NavBar.module.css'
import TopHeader from './TopHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBagShopping, faCancel, faCartArrowDown, faMagnifyingGlass, faMoon, faStar, faSun, faUser, faUserAlt, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const NavBar = () => {

  const [dropdown, setDropdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { theme, setTheme } = useContext(AppContext)

  return (
    <>
      
      <div className={style.navbar}>

        <nav className={theme == 'light' ? style.light : style.dark}>

              <div className={style.logo}>
                Exclusive
              </div>


              {/* MOBILE MENU BUTTON ADDED */}
              <div 
                className={style.menuBtn}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars}/>
              </div>


              <div className={`${style.links} ${menuOpen ? style.active : ''}`}>
                  <ul>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/contact'><li>Contact</li></NavLink>
                    <NavLink to='/about'><li>About</li></NavLink>
                    <NavLink to='/signup'><li>SignUp</li></NavLink>
                  </ul>
              </div>


              <div className={style.right}>
                  <div className={style.searchWrapper}>
                      <input type="search" name="search" id="search" placeholder='What are you looking for ?' />
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>

                  <FontAwesomeIcon icon={faHeart}/>

                  <Link to='/cart'>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                  </Link>

                  <div>
                    {
                      dropdown ? 
                      <FontAwesomeIcon className={style.acctIcon} onClick={() => setDropdown(false)} icon={faUser}/>
                      :
                      <FontAwesomeIcon className={style.acctIcon} onClick={() => setDropdown(true)} icon={faUser}/>
                    }

                    { dropdown &&
                      <div className={style.acctDropdown}>
                      <div className={style.dropDownList}>
                        <Link to='/account'>
                          <FontAwesomeIcon icon={faUserAlt}/>
                          <span>Manage My Account</span>
                        </Link>
                      </div>

                      <div className={style.dropDownList}>
                        <Link>
                          <FontAwesomeIcon icon={faBagShopping}/>
                          <span>My Order</span>
                        </Link>
                      </div>

                      <div className={style.dropDownList}>
                        <Link>
                          <FontAwesomeIcon icon={faCancel}/>
                          <span>My Cancellations</span>
                        </Link>
                      </div>

                      <div className={style.dropDownList}>
                        <Link>
                          <FontAwesomeIcon icon={faStar}/>
                          <span>My Ratings</span>
                        </Link>
                      </div>

                      <div className={style.dropDownList}>
                        <Link>
                          <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                          <span>Logout</span>
                        </Link>
                      </div>

                    </div>}

                  </div>


                  <button 
                    className={style.theme} 
                    onClick={() => setTheme(prevTheme => (prevTheme == 'light' ? 'dark' : 'light'))}
                  >
                    <FontAwesomeIcon icon={theme == 'light' ? faSun : faMoon}/>
                  </button>

              </div>

          </nav>

      </div>

    </>
  )
}

export default NavBar