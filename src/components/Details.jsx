import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { SRLWrapper } from "simple-react-lightbox"
import './Detail.css'
import { useState } from 'react';

function Details() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.ProductReducer)
    // console.log(product)
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id: id })
    }, [id])
    const [quantity, setQuantity] = useState(1)
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
        else return quantity
    }
    return (
        <div>
            <div className="detail">
                <div className="container">
                    <div className="row">
                        <div className="xx col-lg-6 col-md-6 col-sm-12">
                            <div className="detail_img">

                                <SRLWrapper>
                                    <img src={product.image} alt="" />
                                </SRLWrapper>

                            </div>

                        </div>
                        <div className="xxx col-lg-6 col-md-6 col-sm-12">
                            <div className="detail__name">{product.name}</div>
                            <div className="detail_price">
                                <span className="detail__actual">Rs.{product.price}</span>
                                <span className="detail__discount">Rs.{product.discountPrice}</span>
                            </div>
                            <div className="details__info">
                                <div className="inc__dec">
                                    <span className="dec" onClick={decQuantity}><BiCaretLeft /></span>
                                    <span className="qty">{quantity}</span>
                                    <span className="inc" onClick={() => setQuantity(quantity + 1)}><BiCaretRight /></span>
                                </div>
                                <div className="detail_btn">
                                    <button className="btn_detail" onClick={() => dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: { product, quantity }
                                    })}>Add To Cart</button>
                                </div>
                                <div className="detail_para">
                                    {product.desc}
                                </div>
                                <SRLWrapper>
                                    <div className="detail_other__images  container">
                                        <div className="row">
                                            <div className="other__img col-sm-12 col-md-6 col-lg-6" ><img src={product.image1} alt="" /></div>
                                            <div className="other__img col-sm-12 col-md-6 col-lg-6" > <a href={product.image1} data-lightbox="mygallery"><img src={product.image1} alt="" /></a></div>
                                        </div>
                                    </div>
                                </SRLWrapper>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Details;