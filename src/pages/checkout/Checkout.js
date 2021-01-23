import React from 'react'
import Subtotal from '../../components/subtotal/Subtotal'
import './checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
