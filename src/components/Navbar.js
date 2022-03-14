import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Navbar() {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const { productsQuantity} = useSelector(store => store.cart)

    // useEffect(() => {
    //     setActive(false)
    // }, [setActive])
    // console.log(productsCart)
    return (
        <nav className = 'navbar'>
            <div className = 'container'>
                <div className = 'logo-container'>
                    <h2 onClick = {() => navigate('/')}>My<span>Shop</span>.</h2>
                </div>
                <div className = {active ? 'options-container active' : 'options-container'}>
                    <ul className = 'links'>
                        <li className = 'link'><Link onClick ={() => setActive(false)} to = ''>Inicio</Link></li>
                        <li className = 'link'><Link onClick ={() => setActive(false)} to = 'products'>Productos</Link></li>
                    </ul>
                    <div className = 'cart' onClick = {() => {navigate('cart');setActive(false)}} >
                        <div>
                            Cart 
                            <FaShoppingCart></FaShoppingCart>
                            <span>{productsQuantity}</span>
                        </div>
                        
                    </div>
                </div>
                <div className = 'toggle' onClick = {() => setActive(!active)}>
                    |||
                </div>
            </div>
        </nav>
    )
}

export default Navbar
