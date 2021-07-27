import React from 'react';
import { FaAngleRight } from "react-icons/fa"
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <h4>Bethany</h4>
                        <p>A108 Adam Street <br />
                        New York, NY 535022 <br />
                        United States<br /> <br />
                            <strong>Phone:</strong> +1 5589 55488 55 <br />
                            <strong>Email:</strong>  info@example.com
                          </p>


                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 list-none">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><FaAngleRight className="footer__right__icon" /> Home</li>
                            <li><FaAngleRight className="footer__right__icon" /> About us</li>
                            <li><FaAngleRight className="footer__right__icon" /> Services</li>
                            <li><FaAngleRight className="footer__right__icon" /> Terms of service</li>
                            <li><FaAngleRight className="footer__right__icon" /> Privacy policy</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 list-none">
                        <h4>Our Services</h4>
                        <ul>
                            <li><FaAngleRight className="footer__right__icon" /> Web Design</li>
                            <li><FaAngleRight className="footer__right__icon" /> Web Development</li>
                            <li><FaAngleRight className="footer__right__icon" /> Product Management</li>
                            <li><FaAngleRight className="footer__right__icon" /> Marketing</li>
                            <li><FaAngleRight className="footer__right__icon" /> Graphic Design</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer__div4">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="">
                            <input type="email"/>
                            <input type="submit" value="Subscribe"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;