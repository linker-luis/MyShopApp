import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeProductCartAction, addProductCartAction, subtractProductCartAction } from '../redux/slices/cartSlice'

function CartItem({item}) {
    const dispatch = useDispatch()
    
    return (
        <div className = 'item'>
            <div className = 'item-product'>
                {/* <img src={item.product.image_url} alt="" /> */}
                <img src={item.product.imageURL} loading='lazy' alt="" />
                <div>
                    <h5>{item.product.name}</h5>
                    <p>${item.product.price}</p>
                </div>
            </div>
            <div className = 'item-actions'>
                <button onClick = {() => dispatch(subtractProductCartAction(item.id))}>-</button>
                <p>{item.quantity}</p>
                <button onClick = {() => dispatch(addProductCartAction(item.product))}>+</button>
            </div>
            <div className = 'item-subtotal'>
                {/* <h5>Quantity</h5> */}
                <p><span>$</span>{item.get_total}</p>
            </div>
            <div className = 'delete'>
                <div onClick = {() => dispatch(removeProductCartAction(item.id))}>
                    <FaTrashAlt/>
                </div>
            </div>
        </div>
    )
}

export default CartItem
