import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsCart: [],
        productsQuantity: 0,
        subTotal: 0.00
    },
    reducers: {
        addProductCart: (state, action) => {
            const itemCart = state.productsCart.find(item => item.id === action.payload.id)
            if(itemCart){
                // itemCart.quantity = itemCart.quantity + 1
                itemCart.quantity ++
                itemCart.get_total = (itemCart.quantity * itemCart.product.price).toFixed(2)
            }
            else {
                const item = action.payload
                item.quantity = 1
                item.get_total = item.product.price

                return {...state, productsCart: [...state.productsCart, item]}
            }
        },
        removeProductCart: (state, action) => {
            const itemsCart = state.productsCart.filter(item => item.id !== action.payload)
            state.productsCart = itemsCart
        },
        subtractProductCart: (state, action) => {
            const itemCart = state.productsCart.find(item => item.id === action.payload)
            
            if(itemCart && itemCart.quantity > 1){
                itemCart.quantity -= 1
                itemCart.get_total = (itemCart.quantity * itemCart.product.price).toFixed(2)
            }
            else {
                const itemsCart = state.productsCart.filter(item => item.id !== action.payload)
                state.productsCart = itemsCart
            }
        },
        calcQuantity: (state, action) => {
            let quantity = 0
            state.productsCart.map(product => (
                quantity += product.quantity
            ))
            state.productsQuantity = quantity
        },
        calcSubtotal: (state, action) => {
            let subTotal = 0
            state.productsCart.map(product => subTotal += parseFloat(product.get_total))
            state.subTotal = subTotal.toFixed(2)
        }
    }

})

export default cartSlice.reducer

export const { addProductCart, removeProductCart, subtractProductCart, calcQuantity, calcSubtotal } = cartSlice.actions

export const addProductCartAction = (product) => (dispatch) => {
    const item = {
        product: product,
        id: product.id
    }
    
    dispatch(addProductCart(item))
    dispatch(calcQuantity())
}

export const removeProductCartAction = (id) => (dispatch) => {
    dispatch(removeProductCart(id))
    dispatch(calcQuantity())
}

export const subtractProductCartAction = (id) => (dispatch) => {
    dispatch(subtractProductCart(id))
    dispatch(calcQuantity())
}