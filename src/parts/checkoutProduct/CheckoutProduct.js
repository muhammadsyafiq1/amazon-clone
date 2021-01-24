import React from 'react'
import './checkoutProduct.css'

function CheckoutProduct({id, image, title, price}) {
    return (
        <div className="checkout__product">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <button>
                    Remove from basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
