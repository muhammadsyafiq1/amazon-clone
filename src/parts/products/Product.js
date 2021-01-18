import React from 'react'
import './product.css'

function Product({title, image, price}) {
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
            <button>Add to basket</button>
        </div>
    );
}

export default Product
