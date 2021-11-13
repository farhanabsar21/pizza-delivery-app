import React from 'react';
import HeaderContent from './HeaderContent';
import Navbar from './Navbar';

const Header = () => {
    return (
        <section className="header-section">
            <div className="custom-container">
                <Navbar/>
                <HeaderContent/>
            </div>
        </section>
    );
};

export default Header;