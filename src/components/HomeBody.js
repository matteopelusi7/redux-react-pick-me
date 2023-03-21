import React, { useEffect } from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/reducers/api-reducer';
import Card from './Card';

const HomeBody = () => {

  const { photos, error, loading, rate_limit } = useSelector((state) => state.photos)
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
            <input className='search' type="text" name="search" value="search" placeholder='Cerca la tua foto' onChange={() => { return }} /> 
            <button className='icon-bar'>
              <AiOutlineFileSearch className='fs-5' /> 
            </button>
          </div>
        </div>
        <div className='col-4 request text-end pr-5'>
          <p className='fs-6'>{` Richieste: ${rate_limit.remaining}/${rate_limit.total} `}</p>
        </div>
        <div className='mt-5 d-flex flex-wrap'>
          { !loading && !error.status && photos.length
          > 0 ? (
            photos.map((el) => {
              return <Card key={el.id} {...el} />
            })
          ) : !loading && error.status ? (
            error.message && error.message.length > 0
            ? (
              error.message.join(" ")
            ) : (
              "Error"
            )
          ) : (
            <h3>Loading...</h3> 
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeBody