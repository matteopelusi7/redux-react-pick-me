import React, { useEffect } from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/reducers/api-reducer';

const HomeBody = () => {

  const {photos} = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData('photos'))
  }, [])
  
  return (
    <div className='container my-5 pb-5'>
      <div className='px-4 mt-3 row d-flex justify-content-between align-items-center'>
        <div className='col-8'>
          <h3 className='fs-1'>Search your photos</h3>
          <div className='pt-4 container-search d-flex align-items-center'>
            {/* <input className='search' type="text" name="search" value="search" placeholder='Cerca la tua foto' />  */}
            <button className='icon-bar'>
              <AiOutlineFileSearch className='fs-5' /> 
            </button>
          </div>
        </div>
        <div className='col-4 request text-end pr-5'>
          <p className='fs-6'>Request: 49/50</p>
        </div>
      </div>
    </div>
  )
}

export default HomeBody