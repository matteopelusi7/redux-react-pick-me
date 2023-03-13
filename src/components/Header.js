import React from 'react'
import logo from '../images/logo.svg'
import cart from '../images/cart.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <div className='row col-12'>
            <div className='d-flex justify-content-between my-4'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <Link to='/checkout'>
                    <img src={cart} alt="cart" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header