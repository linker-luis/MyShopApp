import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productSlice'
import cart from './slices/cartSlice'
import category from './slices/categorySlice'

export default configureStore({
    reducer: {
        products,
        cart,
        category
    }
})