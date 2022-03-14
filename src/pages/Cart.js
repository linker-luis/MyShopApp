import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import CartResume from '../components/CartResume'

function Cart() {
    const {productsCart} = useSelector(store => store.cart) 
    return (
        <div className = 'cart-page'>
            <div className = 'cart-items'>
                <div className = 'items-title'>
                    <h3>Item</h3>
                    <h3>Cantidad</h3>
                    <h3>SubTotal</h3>
                    <h3>{}</h3>
                </div>
                {
                    productsCart.length > 0 
                        ? (
                            productsCart.map((item, i) => (
                                <CartItem key = {i} item = {item}/>
                            ))
                        )
                        : <h4 className = 'cart-void'>Carrito de compras vacio</h4>
                }
                
                
            </div>
            <div className = 'cart-resume-container'>
                <CartResume/>
            </div>
        </div>
    )
}

export default Cart
