import React from 'react'
import Card from './Card'

function LastProductSection() {
    return (
        <div className = 'last-products'>
            <div className = 'title'>
                <h2>Last Products</h2>
                <div className = 'separator'></div>
            </div>
            <div className = 'products'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </div>
        </div>
    )
}

export default LastProductSection
