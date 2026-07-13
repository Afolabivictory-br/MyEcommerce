import React from 'react'
import style from '../components/Hero.module.css'
import HeroImg from '../assets/heroimg.png'
import Apple from '../assets/apple.png'

const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.leftGrid}>
            <h4>Women's Fashion</h4>
            <h4>Men's Fashion</h4>
            <h4>Electronics</h4>
            <h4>Home & Lifestyle</h4>
            <h4>Medicine</h4>
            <h4>Sports & Outdoor</h4>
            <h4>Baby's & Toys</h4>
            <h4>Groceries & Pets</h4>
            <h4>Health & Beauty</h4>
        </div>
        <div className={style.rightGrid}>
            <div className={style.heroText}>
                <div className={style.heroTop}>
                    <img src={Apple} alt="" />
                    iPhone 14 Series
                </div>
                <h1>Up to 10% <br /> off Voucher</h1>
                <a href="#">Shop Now →</a>
            </div>
            <div className={style.heroimg}>
                <img src={HeroImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero
