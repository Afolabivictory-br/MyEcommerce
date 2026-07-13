import React from 'react'
import style from '../components/FlashSale.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FlashSale = ({ flashProduct, loading }) => {

  return (
    <div className={style.FlashSale}>

      <div className={`${style.card} ${loading ? style.noHover : ""}`}>

        <div className={style.imageWrap}>

          {loading ? (
            <Skeleton height={230} />
          ) : (
            <img src={flashProduct.image} alt={flashProduct.name} />
          )}

          <div className={`${style.overlay} ${loading ? style.hideOverlay : ""}`}>

            <h4>-{flashProduct?.discount}%</h4>

            <FontAwesomeIcon className={style.heart} icon={faHeart} />
            <FontAwesomeIcon className={style.view} icon={faEye} />

            <h3>Add to Cart</h3>
          </div>

        </div>

        <div className={style.cardText}>

          {loading ? (
            <Skeleton width={200} height={20} />
          ) : (
            <h3>{flashProduct.name}</h3>
          )}

          {loading ? (
            <Skeleton width={130} height={20} />
          ) : (
            <p>
              ${flashProduct.price} <span>${flashProduct.oldPrice}</span>
            </p>
          )}

          <div className={style.rating}>
            { loading ? (
              <Skeleton width={150} height={20}/>
            ) : (
              <>
                {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className={
                    star <= flashProduct.rating
                      ? style.activeStar
                      : style.inactiveStar
                  }
                  />
                ))}
                  <p>{flashProduct.review}</p>
              </>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default FlashSale