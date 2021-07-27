import React from 'react';
import { FaFacebookF, FaTwitter,FaInstagram,FaSkype, FaLinkedinIn } from "react-icons/fa"
import "./Footer.css"
const Footer2 = () => {
    return (
        <div className="footer2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="copyright">
                            © Copyright <strong><span>Bethany.</span> </strong>  All Rights Reserved <br />
                        </div>
                        <div className="credit">
                            Designed by <span>Abdullah Amjad</span>
                        </div>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="footer2__right__flex">
                            <ul>
                                <li><FaFacebookF/> </li>
                                <li><FaTwitter/> </li>
                                <li><FaInstagram/> </li>
                                <li><FaSkype/> </li>
                                <li><FaLinkedinIn/> </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer2;