import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart, removeFromCart } from '../redux/reducers/cart-reducer'

const BodyCart = () => {

  const dispatch = useDispatch()  
  const { cart } = useSelector((store) => store.cart)

  return (
    <div className='my-5'>
        <div className='row mx-5'>
            <h2 className='cart-title col-12'>Carrello</h2>
        </div>
        <div className='row px-4 my-4 d-flex justify-content-between gap-3 flex-nowrap'>
            <div className='col-6 cart-collect d-flex flex-column p-3'>
                <button className='remove-all pb-3' onClick={() => dispatch(cleanCart())}>
                    <p className='text-end p-3 category'>Remove all</p>
                </button>
                {cart.map((el) => {
                    return (
                        <div className='container-buy d-flex justify-content-between pb-4'>
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
            
            <div className='col-6 cart-pay p-5 d-flex align-center flex-column justify-content-evenly gap-3'>
                <h4 className='pb-3'>Dati di pagamento</h4>
                <div className='d-flex gap-3'>
                    <input type="text" name="" value="" placeholder='Nome' onChange={(e) => {return}} />
                    <input type="text" name="" value="" placeholder='Cognome' onChange={(e) => {return}} />
                </div>
                <div>
                    <input type="text" name="" value="" placeholder='Carta di Credito' onChange={(e) => {return}} />
                </div>
                <div className='d-flex gap-3 flex-wrap'>
                    <input type="text" name="" value="" placeholder='Indirizzo' onChange={(e) => {return}} />
                    <input type="text" name="" value="" placeholder='Numero' onChange={(e) => {return}} />
                    <input type="text" name="" value="" placeholder='CAP' onChange={(e) => {return}} />
                </div>
                <div className='pt-3 d-flex align-center payment justify-content-between'>
                    <p className='mb-0 fs-4'>23 €</p>
                    <button type="">Procedi all'acquisto</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BodyCart