import React from 'react'
import { ReactComponent as CartIcon } from "../images/purple-cart.svg";

const Card = ({urls, likes}) => {
  return (
    <div className='card-w d-flex justify-content-center align-items-center flex-wrap'>
        <img src={urls.full} alt="" height={'300px'} />
        <div className='overlay'>
            <p className='likes fs-5'>{likes}€</p>
            <button className='add' type="">
                <CartIcon />
            </button>
        </div>
    </div>
  )
}

export default Card