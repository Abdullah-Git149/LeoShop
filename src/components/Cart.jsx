import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { BiCaretLeft, BiCaretRight, BiTrashAlt } from "react-icons/bi";

import './Cart.css'
function Cart() {
    const { products, totalQuantities,totalPrice } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    console.log(products.lenght)
    return (
        <div>
            <div className="cart">
                <div className="container">
                    <h2>Your Cart</h2>
                    {products.lenght > 0 ? 'nott' : <>
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="cart__heading">

                                    <div className="roww">
                                        <div className="coll-2">Picture</div>
                                        <div className="coll-2">Name</div>
                                        <div className="coll-2">Price</div>
                                        <div className="coll-2">Inc / Dec</div>
                                        <div className="coll-2">Total Price</div>
                                        <div className="coll-2">Remove</div>
                                    </div>
                                </div>

                                {products.map(product => (

                                    <div className="cart_data" key={product.id}>
                                        <div className="coll-2">
                                            <div className="cart__img">
                                                <img src={product.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="coll-2">
                                            <div className="cart__name">
                                                {product.name}
                                            </div>
                                        </div>

                                        <div className="coll-2">
                                            <div className="cart__price">
                                                Rs. {product.discountPrice}
                                            </div>
                                        </div>
                                        <div className="coll-2">
                                            <div className="cart__qty">
                                                <div className="inc__dec">
                                                    <span className="decc" onClick={() => dispatch({ type: 'DEC', payload: product.id })}><BiCaretLeft /></span>
                                                    <span className="qtyy">{product.quantity}</span>
                                                    <span className="incc" onClick={() => dispatch({ type: 'INC', payload: product.id })}><BiCaretRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="coll-2">
                                            <div className="cart__tprice">
                                                Rs. {Math.floor(product.discountPrice * product.quantity)}
                                            </div>
                                        </div>
                                        <div className="coll-2">
                                            <div className="cart_remove">
                                                <BiTrashAlt className="dustbin" onClick={() => dispatch({ type: 'REMOVE', payload: product.id })} />

                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="summary">
                                    <div className="summary_heading">
                                        Summary
                                    </div>
                                    <div className="summary_details">
                                        <div className="roww">
                                            <div className="coll-6 ex tItem">
                                                Total Items
                                            </div>
                                            <div className="coll-6 ex" >
                                                {totalQuantities}
                                            </div>
                                        </div>
                                        <div className="roww">
                                            <div className="coll-6 ex tPrice">
                                                Total Price:
                                            </div>
                                            <div className="coll-6 ex" >
                                                Rs. {Math.floor(totalPrice) }
                                            </div>
                                          
                                      </div>
                                      <div className="coll-6 sa">
                                          <button className="check_btn">Check Out</button>
                                      </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </>}
                </div>

            </div>


        </div>
    );
}

export default Cart;