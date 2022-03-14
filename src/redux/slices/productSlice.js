import { createSlice } from '@reduxjs/toolkit'
import { 
    getProductServices, 
    getFeaturedProductServices, 
    getProductDetailServices,
    getProductsByCategoryServices,
    getProductsByNameServices 
} from '../../services/productServices'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
        featuredProducts: [],
        productDetail: {},
        loading: null,
        error: null
    },
    reducers: {
        getProductList: (state, action) => {
            return {...state, productList: action.payload}
        },
        getFeaturedProducts: (state, action) => {
            state.featuredProducts = action.payload
        },
        getProductDetails: (state, action) => {
            state.productDetail = action.payload
        },
        getPoductsByCategory: (state, action) => {
            state.productList = action.payload
        },
        getPoductsByName: (state, action) => {
            state.productList = action.payload
        },

        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { 
    getProductList, 
    getFeaturedProducts, 
    getProductDetails,
    getPoductsByCategory,
    getPoductsByName,
    setLoading,
    setError
} = productSlice.actions

export default productSlice.reducer

export const fetchProductList = () => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await getProductServices()
        dispatch(getProductList(response.data))
        dispatch(setLoading(null))
    } catch (error) {
        dispatch(setLoading(null))
        dispatch(setError(true))
    }
}

export const fetchFeaturedProducts = () => async (dispatch) => {
    const response = await getFeaturedProductServices()
    dispatch(getFeaturedProducts(response.data))
}

export const fetchProductDetail = (id) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await getProductDetailServices(id)
        dispatch(getProductDetails(response.data))
        dispatch(setLoading(null))
    } catch (error) {
        console.log(error)
        dispatch(setLoading(null))
        dispatch(setError(true))
    }
}

export const fetchProductByCategory = (category) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await getProductsByCategoryServices(category)
        dispatch(getPoductsByCategory(response.data))
        dispatch(setLoading(null))
    } catch (error) {
        dispatch(setLoading(null))
        dispatch(setError(true))
    }
    
}

export const fetchProductByName = (name) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await getProductsByNameServices(name)
        dispatch(getPoductsByName(response.data))
        dispatch(setLoading(null))
    } catch (error) {
        dispatch(setLoading(null))
        dispatch(setError(true))
    }
    
}