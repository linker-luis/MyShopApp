import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { addProductCartAction } from '../redux/slices/cartSlice'

function Card({product}) {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(addProductCartAction(product))
        
    }

    const handleNavigate = () => {
        location.pathname === '/products' 
            ? navigate(`${product.id}`) 
            : navigate(`products/${product.id}`)
    }
    
    
    return (
        <div className = {location.pathname === '/products' ? 'card' : 'card last-card'}>
            <div className = 'title'>
                <h4>{product.name}</h4>
            </div>
            <div className = 'card-img' onClick = {handleNavigate}>
                <img src={product.imageURL} loading="lazy" alt="" />
            </div>
            <div className = 'description'>
                <h4>$ {product.price}</h4>
                <button onClick = {() => addProduct()} className = 'card-btn'>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default Card
