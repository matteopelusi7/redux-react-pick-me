import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
// import { ReactComponent as CartIcon } from "../images/cart.svg";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className='container'>
        <div className='row col-12'>
            <div className='d-flex justify-content-between my-4'>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <Link to='/checkout'>
                    <div className='img-cart-2'>
                        <FaShoppingCart />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header