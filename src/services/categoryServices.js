import { instance } from "./settings";

export const getCategoriesServices = async () => {
    try {
        const res = await instance.get('api/categories')
        return res
    } catch (error) {
        console.log(error)
    }
}