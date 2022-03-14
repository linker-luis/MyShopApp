import React, { useEffect } from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

import Loader from '../components/Loader'
import { fetchProductList } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function Products() {
    const dispatch = useDispatch()
    const {productList, loading, error} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProductList())
        // console.log('pedido')
    }, [dispatch])

    let prods

    if(loading) {
        prods = (
            <Loader/>
        )
    }
    else if(error) {
        prods = (
            <h2>error</h2>
        )
    }
    else{
        prods = (
            <>
                {
                    productList.map(product => {
                        
                        return(
                            <Card key = {product.id} product = {product}/>
                        )
                    })
                }
            </>
        )
    }

    
    return (
        <div className = 'products-page'>
            <Sidebar/>
            <div className = 'products-container'>
                {
                    prods
                }
            </div>
            

        </div>
    )
}

export default Products
