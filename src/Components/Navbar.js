import React from 'react';
import logo from "../img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import "../styles/Navbar.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cartState = useSelector(state => state.cartReducer)
    return (
        <nav className="navbar navbar-expand-lg pt-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo} alt="brand" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/"><FontAwesomeIcon icon={faUser} /></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link position-relative" to="/cart"><FontAwesomeIcon icon={faShoppingBag} />
                                <p className="cart-count">{cartState.cartItems.length}</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;