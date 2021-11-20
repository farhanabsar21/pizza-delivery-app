import React from 'react';
import Navbar from './Navbar';
import "../styles/Cart.css";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { addToCart, deleteFromCart } from '../Redux/Actions/cartActions';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch()
    let totalCost = cartItems.reduce((x,y) => x + y.price , 0)
    return (
        <div>
            <div className="cart-header">
                <div className="custom-container">
                    <Navbar />
                </div>
            </div>
            <div>
                <div className="cart-container custom-container">
                    <div className="row mt-5">
                        <div className="col-lg-8">
                            <div className="main-cart">
                                <h2>Your Cart: <span className="cart-item-count">{cartItems.length}</span> {cartItems.length < 2 ? "Item" : "Items"}</h2>
                                {cartItems.map(item =>
                                    <div className="cart-main-container" key={item._id}>
                                        <div className="h-100 w-100">
                                            <h4>{item.name}</h4>
                                            <h5>{item.varient}</h5>
                                            <h5>{item.quantity} * {item.prices[0][item.varient]} = {item.price} <FontAwesomeIcon icon={faDollarSign} /></h5>
                                            <h6 onClick={()=> {dispatch(deleteFromCart(item))}}><FontAwesomeIcon icon={faTrashAlt} /> remove</h6>
                                        </div>
                                        <div className="h-100 w-100">
                                            <div className="mt-4">
                                                <span className="icon-quantity" onClick={() => { dispatch(addToCart(item, item.varient, item.quantity - 1)) }}><FontAwesomeIcon icon={faMinus} /></span>
                                                <span className="icon-quantity-count">{item.quantity}</span>
                                                <span className="icon-quantity" onClick={() => { dispatch(addToCart(item, item.varient, item.quantity + 1)) }}><FontAwesomeIcon icon={faPlus} /></span>
                                            </div>
                                        </div>
                                        <div className="h-100 w-100">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-cart">
                                <h2>Your Cost</h2>
                                <div>
                                    {cartItems.length > 0 ? <p className="total-cost">{totalCost} <span><FontAwesomeIcon icon={faDollarSign} /></span></p> : <p>You have no item yet</p>}
                                </div>
                                <div className="ps-3">
                                    <button>Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;