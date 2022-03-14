import { createSlice } from '@reduxjs/toolkit'
import { getCategoriesServices } from '../../services/categoryServices'

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        loading: null,
        error: null
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },

        setLoading: (state, action) => {
            return {...state, loading: action.payload, error: null}
        },

        setError: (state, action) => {
            return {...state, loading: null, error: action.payload}
        }

    }
})

export const { setCategories, setLoading, setError } = categorySlice.actions

export default categorySlice.reducer

export const fetchCategories = () => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await getCategoriesServices()
        dispatch(setCategories(response.data))
        dispatch(setLoading(null))
    } catch (error) {
        dispatch(setError('error'))
    }
}