import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'
import Title from '../components/Title'
import { fetchFeaturedProducts } from '../redux/slices/productSlice'

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFeaturedProducts())
    }, [dispatch])

    const products = useSelector(state => state.products)

    return (
        <div className = 'home'>
            <Header/>
            <div className = 'last-products'>
                <Title title = {'Ultimos Añadidos'}/>
                <div className = 'products'>
                    {
                        products.featuredProducts?.map(product => {
                            return (
                                <Card key = {product.id} product = {product}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Home
