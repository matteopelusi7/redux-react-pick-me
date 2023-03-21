import React from 'react'
import logo_footer from '../images/logo-footer.svg'

const Footer = () => {
  return (
    <div className='container py-5'>
        <div className='d-flex align-items-center gap-3'>
            <div>
                <img src={logo_footer} alt="" width='80px' />
            </div>
            <div>
                <p className='fs-5'>pick me</p>
                <p className='fs-6 footer'>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer