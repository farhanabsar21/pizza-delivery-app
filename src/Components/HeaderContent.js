import React from 'react';
import pizzaMan from "../img/pizza-man.png";
import "../styles/Header.css"
const HeaderContent = () => {
    return (
        <div className="row header-content">
            <div className="col-md-6 d-flex align-items-center">
                <div className="px-3">
                    <h1>best & fastest <span className="delivery">delivery</span> in your town</h1>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam in provident saepe odio sint omnis, voluptatibus temporibus non qui hic.</p>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="col-md-6">
                <img src={pizzaMan} alt="pizza-man" />
            </div>
        </div>
    );
};

export default HeaderContent;