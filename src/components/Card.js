import React from 'react'
import { ReactComponent as CartIcon } from "../images/purple-cart.svg";
import { addSingleItemToCart } from '../redux/reducers/cart-reducer';
import { useDispatch } from 'react-redux';

const Card = ({urls, likes, id}) => {

  const dispatch = useDispatch()

  return (
    <div className='card-w d-flex justify-content-center align-items-center flex-wrap'>
        <img src={urls.full} alt="" height={'300px'} />
        <div className='overlay'>
            <p className='likes fs-5'>{likes}€</p>
            <button className='add' type="" onClick={() => dispatch(addSingleItemToCart({
              id,
              likes,
              url: urls.full
            }))}>
                <CartIcon />
            </button>
        </div>
    </div>
  )
}

export default Card