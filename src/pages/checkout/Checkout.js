import React from 'react'
import Subtotal from '../../components/subtotal/Subtotal'
import CheckoutProduct from '../../parts/checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider'
import './checkout.css'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
