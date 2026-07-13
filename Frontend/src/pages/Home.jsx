import React, { useEffect, useState } from 'react'
import style from '../pages/Home.module.css'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import FlashSale from '../components/FlashSale'
import Categories from '../components/Categories'
import BestSelling from '../components/bestSelling'
import Products from '../components/products'
import Footer from '../components/Footer'
import SubFooter from '../components/subFooter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons/faMobile'
import { faComputer } from '@fortawesome/free-solid-svg-icons/faComputer'
import { faTruck } from '@fortawesome/free-regular-svg-icons'
import { faHeadset, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

import Bluetooth from '../assets/jbl.png'
import ps from '../assets/pc.png'
import woman from '../assets/woman.png'
import mp from '../assets/mp.png'
import gucci from '../assets/gucci.png'

const Home = () => {
  const flashSales = new Date("December 25, 2026 12:07:00").getTime();
  const advert = new Date("October 24, 2026 12:11:00").getTime();

  function getTimeRemaining() {
    const now = new Date().getTime()
    const difference = flashSales - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      ended: false
    };
  }

  function adDuration() {
    const now = new Date().getTime()
    const difference = advert - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      ended: false
    };
  }

  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());
  const [placementDuration, setPlacementDuration] = useState(() => adDuration())

  const [flashSale, setFlashSale] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlacementDuration(adDuration());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Promise.all([
        fetch("/flashSale.json").then((res) => res.json()),
        fetch("/bestSelling.json").then((res) => res.json()),
        fetch("/products.json").then((res) => res.json())
      ])
        .then(([flashData, bestData, productData]) => {
          setFlashSale(flashData);
          console.log(flashData)
          setBestSelling(bestData);
          setProduct(productData);
        })
        .catch(() => {
          console.error("Oops an error occurred while trying to fetch data");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  }, []);

  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className={style.main}>
      <Hero />

      <div className={style.ticker}>
        <div className={style.tickerTrack}>
          <p>
            Welcome to your favorite shopping destination • Discover quality products at unbeatable prices • Shop fashion, gadgets, and everyday essentials with ease • Fast delivery, secure payments, and trusted service • Enjoy exclusive deals and daily discounts • Join thousands of happy customers today • Find the perfect gift for every moment • Smart shopping starts here •
          </p>
        </div>
      </div>

      <div>
        <div className={style.title}>
          <div className={style.design}></div>
          Today's
        </div>

        <div className={style.flashSale}>
          Flash Sales

          {timeLeft.ended ? (
            <p style={{ backgroundColor: '#DB4444', color: 'white' }}>
              Flash Sale Ended
            </p>
          ) : (
            <div className={style.time}>
              <div className={style.count}>
                <h6>Days</h6>
                <div>{format(timeLeft.days)}<span>:</span></div>
              </div>

              <div className={style.count}>
                <h6>Hours</h6>
                <div>{format(timeLeft.hours)}<span>:</span></div>
              </div>

              <div className={style.count}>
                <h6>Minutes</h6>
                <div>{format(timeLeft.minutes)}<span>:</span></div>
              </div>

              <div className={style.count}>
                <h6>Seconds</h6>
                {format(timeLeft.seconds)}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={style.cart}>
        {loading
          ? Array(4).fill().map((index) => (
              <FlashSale
                key={index}
                loading={true}
              />
            ))
          : flashSale.map((item) => (
              <FlashSale
                key={item.id}
                flashProduct={{ ...item }}
                loading={false}
              />
            ))}
      </div>

      <div className={style.button}>
        <button className={style.more}>View All Products</button>
      </div>

      <hr />

      <div className={style.categories}>
        <Categories />
        <hr />
      </div>

      <div className={style.titlePage}>
        <div className={style.title}>
          <div className={style.design}></div>
          This Month
        </div>

        <h2>Best Selling Products</h2>

        <div></div>

        <div className={style.bestProduct}>
          { loading ? Array(4).fill().map((index) => (
            <BestSelling
            key={index}
            loading={true}
            />
          ))
          :
          bestSelling.map((item) => (
            <BestSelling
              key={item.id}
              bestProduct={{ ...item }}
              loading={false}
            />
          ))}
        </div>
      </div>

      <div className={style.advert}>
        <div className={style.advertText}>
          <h4>Categories</h4>

          <h2>
            Enhance Your <br /> Music Experience
          </h2>

          {placementDuration.ended ? (
            <p style={{ color: 'red' }}>Promo Ended</p>
          ) : (
            <div className={style.duration}>
              <div className={style.advertTime}>
                <div>{format(placementDuration.days)}</div>
                <p>Days</p>
              </div>

              <div className={style.advertTime}>
                <div>{format(placementDuration.hours)}</div>
                <p>Hours</p>
              </div>

              <div className={style.advertTime}>
                <div>{format(placementDuration.minutes)}</div>
                <p>Minutes</p>
              </div>

              <div className={style.advertTime}>
                <div>{format(placementDuration.seconds)}</div>
                <p>Seconds</p>
              </div>
            </div>
          )}

          <button className={style.advertBtn}>Buy Now!</button>
        </div>

        <div className={style.advertImg}>
          <img src={Bluetooth} alt="" />
        </div>
      </div>

      <div className={style.products}>
        <div className={style.titlePage}>
          <div className={style.title}>
            <div className={style.design}></div>
            Our Products
          </div>

          <h2>Explore Our Products</h2>
        </div>

        <div className={style.prod}>
          {loading ? Array(8).fill().map((index) => (
              <Products
                key={index}
                loading={true}
              />
            ))
          : product.map((item) => (
            <Products
              key={item.id}
              product={{ ...item }}
              loading={false}
            />
          ))}
        </div>

        <div className={style.button}>
          <button className={style.more}>View All Products</button>
        </div>
      </div>

      <div>
        <div className={style.titlePage}>
          <div className={style.title}>
            <div className={style.design}></div>
            Featured
          </div>

          <h2>New Arrival</h2>
        </div>

        <div className={style.featuredGrid}>
          <div className={style.leftGrid}>
            <img src={ps} alt="" />

            <div className={style.gridText}>
              <h3>PlayStation 5</h3>

              <p>
                Black and White version of PS5 <br />
                coming out on sale
              </p>

              <a href="#">Shop Now</a>
            </div>
          </div>

          <div className={style.rightGrid}>
            <div className={style.rightGrid1}>
              <img src={woman} alt="" />

              <div className={style.gridText}>
                <h3>Women's Collections</h3>

                <p>
                  Featured women's collections that <br />
                  gives you another vibe
                </p>

                <a href="#">Shop Now</a>
              </div>
            </div>

            <div className={style.rightGrid2}>
              <div className={style.rightGrid1Sub1}>
                <img src={mp} alt="" />

                <div className={style.gridText}>
                  <h3>Speakers</h3>

                  <p>Amazon wireless speakers</p>

                  <a href="#">Shop Now</a>
                </div>
              </div>

              <div className={style.rightGrid1Sub}>
                <img src={gucci} alt="" />

                <div className={style.gridText}>
                  <h3>Perfume</h3>

                  <p>GUCCI INTENSE OUD EDP</p>

                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SubFooter />
      </div>
    </div>
  )
}

export default Home