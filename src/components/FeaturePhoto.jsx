import React from 'react';
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import pic1 from "../images/1.jpg"
import pic2 from "../images/2.jpg"
import pic3 from "../images/3.jpg"
import pic4 from "../images/4.jpg"
import pic5 from "../images/5.jpg"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function FeaturePhoto(props) {
    const { products } = useSelector(state => state.ProductReducer)
    console.log(products)
    return (
        <div className="feature_div">

            <div className="homeProducts">
                <div className="">
                    <h2 className="h2"> Featured Photo</h2>
                    <div className="">
                        <OwlCarousel
                            items="5"
                            loop
                            autoplay
                            autoplaySpeed={1000}
                            responsiveClass={true}
                        >
                            {products.map(product => (
                                <div className="item" key={product.id}>
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
                        </OwlCarousel>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default FeaturePhoto;