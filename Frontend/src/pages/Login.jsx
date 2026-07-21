import React, { useContext, useState } from 'react'
import style from '../pages/Login.module.css'
import LoginImg from '../assets/loginPage.png'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AppContext)

  const handleSubmit = () => {
    if (!username || !password) {
      alert('Please fill in all black spaces');
      return;
    }
    formSubmit()
  }

  const formSubmit = async () => {
    try {
      setIsLoading(true)
      const data = await login(username, password)

      if (data.login) {
        navigate('/')
      }
      else {
        toast(data.message)
      }
    }
    catch(error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
    }
  }
  
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
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder='Please Enter Your Name'
                  onChange={(e) => setUsername(e.target.value)}
                  />
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)} 
                  />
              </div>
              <div className={style.loginOptions}>
                <button type="submit" onClick={handleSubmit}>
                  {isLoading?'Logging in...':'Log in'}
                </button>
                Forgotten Password?
              </div>
            </div>
          </div>
    </div>
  )
}

export default Login
