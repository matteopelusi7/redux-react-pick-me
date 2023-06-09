import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart, removeFromCart } from '../redux/reducers/cart-reducer'
import { Formik } from 'formik';

const initialValue = {
    name: '',
    cognome: '',
    card: '',
    address: '',
    civico: '',
    cap: ''
}

const BodyCart = () => {

  const dispatch = useDispatch()  
  const { cart, total } = useSelector((store) => store.cart)

  return (
    <div className='my-5'>
        <div className='row mx-5'>
            <h2 className='cart-title col-12'>Carrello</h2>
        </div>
        <div className='row px-4 my-4 d-flex justify-content-between'>
            <div className='col-12 col-md-6 cart-collect d-flex flex-column p-3 mb-3'>
                <button className='remove-all pb-3' onClick={() => dispatch(cleanCart())}>
                    <p className='text-end p-3 category'>Remove all</p>
                </button>
                {cart.map((el) => {
                    return (
                        <div key={el.id} className='container-buy d-flex justify-content-between pb-4'>
                            <div className='d-flex align-items-center gap-3'>
                                <div className='pr-3'>
                                    <img className='img-cart' src={el.url} height={'80px'} width={'150px'} alt="" />
                                </div>
                            <div className='d-flex gap-2 flex-column ml-2'>
                                <div>
                                    <p className='category'>Categoria</p>
                                </div>
                            <div>
                                <p>Artista</p>
                                <p>Titolo - {el.likes} €</p>
                            </div>
                        </div>
                        </div>
                            <button className='mt-2 pr-4 remove-item' onClick={() => dispatch(removeFromCart(el))}>
                                <RiDeleteBack2Fill className='fs-5' />
                            </button>
                        </div>
                    )
                })}
            </div>
            
            <Formik initialValues={initialValue} onSubmit={(values, {setSubmitting}) => setTimeout(() => {
                    setSubmitting(true)
                    alert(JSON.stringify(values))
                    setSubmitting(false)
                }, 500)} >
                {
                    (
                        {
                            values,
                            handleChange,
                            handleSubmit,
                            handleBlur,
                            isSubmitting,
                            isValid,
                            dirty
                        }
                    ) => (
                        <form onSubmit={handleSubmit} className='col-12 col-md-6 cart-pay p-5 d-flex align-center flex-column justify-content-evenly gap-3'>
                            <h4 className='pb-3 pt-3'>Dati di pagamento</h4>
                            <div className='d-flex flex-wrap gap-3'>
                                <input type="text" name="name" onBlur={handleBlur} value={values.name} placeholder='Nome' onChange={handleChange} />
                                <input type="text" name="cognome" onBlur={handleBlur} value={values.cognome} placeholder='Cognome' onChange={handleChange} />
                            </div>
                            <div>
                                <input type="text" name="card" onBlur={handleBlur} value={values.card} placeholder='Carta di Credito' onChange={handleChange} />
                            </div>
                            <div className='d-flex gap-3 flex-wrap'>
                                <input type="text" name="address" onBlur={handleBlur} value={values.address} placeholder='Indirizzo' onChange={handleChange} />
                                <input type="text" name="civico" onBlur={handleBlur} value={values.civico} placeholder='Numero' onChange={handleChange} />
                                <input type="text" name="cap" onBlur={handleBlur} value={values.cap} placeholder='CAP' onChange={handleChange} />
                            </div>
                            <div className='cont-pay pt-3 d-flex align-center payment justify-content-between flex-wrap gap-3'>
                                <p className='mb-0 fs-4 text-center'>{total} €</p>
                                <button type="">Procedi all'acquisto</button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </div>
    </div>
  )
}

export default BodyCart