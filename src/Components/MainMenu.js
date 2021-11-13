import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../Redux/Actions/pizzaActions';
import "../styles/Mainmenu.css"
import Pizza from './Pizza';

const MainMenu = () => {
    const dispatch = useDispatch() 
    const pizzaState = useSelector(state => state.getAllPizzaReducers);
    const {pizzas, loading} = pizzaState;
    useEffect(()=> {
        dispatch(getAllPizzas())
    }, [dispatch])
    return (
        <section className="main-menu-section p-5">
            <div className="custom-container">
                <div className="text-center main-menu-header py-4">
                    <h5>our menu</h5>
                    <h2>special menu for you</h2>
                </div>
                <div className="pizza-container py-4">
                    <div className="row">
                        {loading ? `<h2>Loading...</h2>` : pizzas.map(pizza => <Pizza pizza={pizza} key={pizza._id}/>)}
                        {/* {pizzas.map((pizza, index) => <Pizza pizza={pizza} key={index}/>)} */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainMenu;