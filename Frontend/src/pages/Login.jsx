import React from 'react'
import style from '../pages/Login.module.css'
import LoginImg from '../assets/loginPage.png'

const Login = () => {
  return (
    <div>
      <div className={style.signUpPage}>
            <div className={style.signUpImg}>
              <img src={LoginImg} alt="" />
            </div>
            <div className={style.signUp}>
              <h1>Log in to Exclusive</h1>
              <h6>Enter your details below</h6>
              <div className={style.inputWrap}>
                <input type="text" name="username" id="username" placeholder='Please Enter Your Name'/>
                <input type="password" name="password" id="password" placeholder='Password' />
              </div>
              <div className={style.loginOptions}>
                <button type="submit">Log in</button>
                Forgotten Password?
              </div>
            </div>
          </div>
    </div>
  )
}

export default Login
