import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    total: 0,
    payed: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cart.push(action.payload)
    },
    cleanCart: (state) => {
        state.cart = []
        state.total = 0
    },
    payOrder: (state) => {
        state.payed = true
    }
  },
})

const addSingleItemToCart = (item) => (dispatch, getState) => {
    const {cart} = getState().cart

    if(cart.find((x) => x.id === item.id)) {
        return
    } else {
        dispatch(addToCart(item))
    }
}

export const { addToCart, cleanCart, payOrder } = cartSlice.actions

export {addSingleItemToCart}

export default cartSlice.reducer