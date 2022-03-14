import React from 'react'
import { useNavigate } from 'react-router'

function Header() {
    const navigate = useNavigate()
    return (
        <header className = 'header'>
            <div className = 'description'>
                <h2>My <span>Shop</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat totam vel eum odio veniam incidunt, quo, cupiditate, nemo distinctio rerum a repellat praesentium error velit?</p>
                <div>
                    <button onClick = {() => navigate('products')} className = 'header-btn'>Ver Productos</button>
                </div>
            </div>
            <div className = 'header-img'>
                <img src="/header-img.svg" alt="" />
            </div>
        </header>
    )
}

export default Header
