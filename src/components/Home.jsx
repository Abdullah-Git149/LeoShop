import React from 'react';
import Header from './Header';
import './Home.css'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Home() {
    const { products } = useSelector(state => state.ProductReducer)
    console.log(products)
    return (
        <div>
            <Header />
            <div className="homeProducts">
                <div className="container">
                    <div className="row">
                        {products.map(product => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                                <div className="product">
                                    <div className="product__img">
                                        <Link to={`/details/${product.id}`}>
                                            <img src={product.image} alt="" />
                                        </Link>

                                    </div>
                                    <div className="product__name">
                                        {product.name}
                                    </div>
                                    <div className="roww">
                                        <div className="col-6">
                                            <div className="product__price">
                                                <span className="actual_price">Rs {product.price}</span>
                                                <span className="discount">{product.discount}%</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__dis__price">
                                                <span> Rs {product.discountPrice}</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;