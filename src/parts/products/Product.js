import React from 'react'
import './product.css'
import {useStateValue} from '../../StateProvider'

function Product({id, title, image, price}) {
    const [{basket}, dispatch] = useStateValue();
    // console.log(basket);
    const addToBasket = () => {
        //kirim item ke data layer / reducer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image}/> 
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product
