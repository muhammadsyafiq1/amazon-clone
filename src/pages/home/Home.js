import React from 'react'
import Product from '../../parts/products/Product';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"/>

                <div className="home__row">
                    <Product 
                        id="09345"
                        title="Machine Learning"
                        price={78.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    />
                    <Product 
                        id="02943"
                        title="Learn Startup"
                        price={8.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                        id="94750"
                        title="Javascript"
                        price={38.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    />
                    <Product 
                        id="73024"
                        title="How to make web"
                        price={188.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    />
                    <Product 
                        id="09345"
                        title="Learn react JS"
                        price={23.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="08432"
                        title="Mesin cuci"
                        price={383.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    />
                    <Product 
                        id="01382"
                        title="Carbon"
                        price={15.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
