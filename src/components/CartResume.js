import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calcSubtotal } from '../redux/slices/cartSlice'

function CartResume() {
    const dispatch = useDispatch()
    const {subTotal} = useSelector(store => store.cart)

    useEffect(() => {
        dispatch(calcSubtotal())
    })
    // const getSubtotal = () => {
    //     dispatch(calcSubtotal())
    //     return subTotal
    // }
    return (
        <div className = 'cart-resume'>
            <h4 className = 'title'>Order Summary</h4>
            <div className = 'resume-container'>
                <div>
                    <h5>Sub-Total:</h5>
                    <p>${subTotal}</p>
                </div>
                <div>
                    <h5>Shipping:</h5>
                    <p>Free</p>
                </div>
            </div>
            <div className = 'cart-total'>
                <h4>Order Total:</h4>
                <p>${subTotal}</p>

            </div>
            <button className = 'btn'>Checkout</button>
        </div>
    )
}

export default CartResume
