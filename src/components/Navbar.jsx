import React from 'react';
import { FaShoppingCart } from "react-icons/fa"
import "./Navbar.css";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
function Navbar() {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    return (
        <div >
            <div className="containerr">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">LeoShop</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown Link
                                </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart"><FaShoppingCart className="shopping_icon" /> {totalQuantities}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>

    );
}

export default Navbar;