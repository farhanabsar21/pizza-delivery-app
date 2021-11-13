import React from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import "../styles/Mainmenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Actions/cartActions';

const Pizza = ({ pizza }) => {

    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState("small")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(pizza, varient, quantity))
    }
    return (
        <div className="col-md-4 pizza-details">
            <div onClick={handleShow}>
                <img src={pizza.image} alt={pizza.name} />
            </div>
            <div className="px-4 py-3 pizza-details-container">
                <h4>{pizza.name}</h4>
                <div className="d-flex justify-content-between py-2">
                    <div>
                        <p>pizza type</p>
                        <select className="form-select" value={varient} onChange={e => setVarient(e.target.value)}>
                            {pizza.varients.map(varient => {
                                return <option value={varient}>{varient}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <p>quantity</p>
                        <select className="form-select" value={quantity} onChange={e => setQuantity(e.target.value)}>
                            {[...Array(10).keys()].map((obj, index) => {
                                return <option value={index + 1}>{index + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-2 price-add-to-cart">
                    <div>
                        <h5 className="price-value">${pizza.prices[0][varient] * quantity}</h5>
                    </div>
                    <div>
                        <button onClick={() => handleAddToCart()}>add to cart</button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className="modal-container">
                <ModalHeader>
                    <img src={pizza.image} alt={pizza.name} className="img-fluid"/>
                </ModalHeader>
                <ModalBody className="modal-body-container">
                    <h4>{pizza.name}</h4>
                    <p className="lead">{pizza.description}</p>
                </ModalBody>
                <ModalFooter>
                    <FontAwesomeIcon icon={faTimes} onClick={handleClose}/>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Pizza;