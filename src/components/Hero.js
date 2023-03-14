import React from 'react'
import nft from '../images/nft-img.png'
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='container my-5 hero'>
        <div className='row d-flex justify-content-center'>
            <div className='col-6 px-5'>
                <h2 className='title pb-5'>The easiest way to buy Photos as NFT.</h2>
                <div className='d-flex start align-items-center gap-3'>
                    <p className='fs-2'>Start Now</p>
                    <BsArrowRight className='fs-4 mt-2' />
                </div>
            </div>
            <div className='col-6 container-image d-flex justify-content-center'>
                <div className='container-img text-center'>
                    <img className='rounded-pers' src={nft} alt="nft" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero