import React from 'react';
import logo from "../img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import "../styles/Navbar.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState
    return (
        <nav className="navbar navbar-expand-lg pt-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo} alt="brand" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {currentUser ?
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle person-details" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{currentUser.username}</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="#">Orders</Link></li>
                                <li><Link class="dropdown-item" to="#">Logout</Link></li>
                            </ul>
                        </li> :
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/login"><FontAwesomeIcon icon={faUser} /></Link>
                        </li>}
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