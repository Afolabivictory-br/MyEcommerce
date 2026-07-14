import React from 'react'
import style from '../pages/SignUp.module.css'
import SignupImg from '../assets/loginPage.png'
import GoogleLogo from '../assets/googlelogo.png'

const SignUp = () => {
  return (
    <div className={style.signUpPage}>
      <div className={style.signUpImg}>
        <img src={SignupImg} alt="" />
      </div>
      <div className={style.signUp}>
        <h1>Create an account</h1>
        <h6>Enter your details below</h6>
        <div className={style.inputWrap}>
          <input type="text" placeholder='Name'/>
          <input type="email" name="email" id="email" placeholder='Email or Phone Number'/>
          <input type="password" name="password" id="password" placeholder='Password' />
          <button type="submit">Create Account</button>
          <div className={style.googleSignup}>
            <img src={GoogleLogo} alt="" />
            Sign Up with Google
          </div>
        </div>
        <p>Already have an account? <a href="/Login">Login</a></p>
      </div>
    </div>
  )
}

export default SignUp
