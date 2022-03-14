import { instance } from "./settings";

export const getProductServices = async () => {
    try {
        const res = await instance.get('api/products/')
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getFeaturedProductServices = async () => {
    try {
        const res = await instance.get('api/featured_products/')
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getProductDetailServices = async (id) => {
    try {
        const res = await instance.get(`api/products/${id}/`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getProductsByCategoryServices = async (category) => {
    try {
        const res = await instance.get(`api/products/?category__name=${category}`)
        return res
    } catch (error) {
        console.log(error)
    }
} 

export const getProductsByNameServices = async (name) => {
    try {
        const res = await instance.get(`api/products/?name=${name}`)
        return res
    } catch (error) {
        console.log(error)
    }
}