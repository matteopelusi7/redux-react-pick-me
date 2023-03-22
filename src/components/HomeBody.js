import React, { useEffect, useState } from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { catchError, fetchData, saveQuery } from '../redux/reducers/api-reducer';
import Card from './Card';

const HomeBody = () => {

  const { photos, error, loading, rate_limit, query: lastSearch } = useSelector((state) => state.photos)
  const dispatch = useDispatch()

  const[itemPerPage, setItemPerPage] = useState(12)
  const [query, setQuery] = useState('')

  const searchPhoto = (page = 1) => {
    fetchPhotos('search', page)
  }

  const fetchPhotos = (type = 'latest', page = 1) => {
    let apiUrl = null;

    if(type === 'search') {
      if(query && query.length > 1 && query !== ' ') {
        apiUrl = `/search/photos?query=${query}&`
      } else {
        dispatch(catchError(['Inserisci almeno un carattere']))
        return
      }
    } else {
      apiUrl = 'photos?'
    }

    dispatch(fetchData(`${apiUrl}per_page=${itemPerPage}&page=${page}`))

    dispatch(saveQuery({
      path: `${apiUrl}`.trim(),
      itemPerPage,
      type,
      query,
    }))
  }

  useEffect(() => {
    if(!lastSearch.query) {
      fetchPhotos()
    } else {
      fetchPhotos(lastSearch.type)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemPerPage])
  
  return (
    <div className='container my-5 pb-5'>
      <div className='px-4 mt-3 row d-flex justify-content-between align-items-center'>
        <div className='col-8'>
          <h3 className='fs-1'>Search your photos</h3>
          <div className='pt-4 container-search d-flex align-items-center'>
            <input className='search' type="text" name="search" value={query} placeholder='Cerca la tua foto' onChange={(e) => setQuery(e.target.value)} /> 
            <button className='icon-bar' onClick={() => searchPhoto()}>
              <AiOutlineFileSearch className='fs-5' /> 
            </button>
          </div>
        </div>
        <div className='col-4 request text-end pr-5'>
          <p className='fs-6'>{` Richieste: ${rate_limit.remaining}/${rate_limit.total} `}</p>
        </div>
        <div className='mt-5 d-flex flex-wrap'>
          { !loading && !error.status && (photos?.length > 0 || photos?.results?.length > 0)
           ? (
            (photos?.results ? photos.results : photos).map((el) => {
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
        <div className='item-page mt-5 d-flex flex-row-reverse'>
          <p>
            Item Per Page {" "}
            <select value={itemPerPage} onChange={(e) => setItemPerPage(e.target.value)}>
              {Array.from({length: 7}, (_, index) => {
                return (index + 1 ) * 3;
              }).map((el) => {
                return (
                  <option value={el} key={`option-${el}`}>
                    {el}
                  </option>
                )
              })}
            </select>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeBody