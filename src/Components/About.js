import React from 'react';
import "../styles/About.css"
import prepare from "../img/prepare.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section className="about-section d-flex align-items-center justify-content-center">
            <div className="custom-container row about-container">
                <div className="col-md-6">
                    <div className="position-relative">
                        <img src={prepare} alt="prepare" className="img-fluid"/>
                        <div className="img-border"></div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center about-content">
                    <div className="about-content-width">
                        <div className="position-relative">
                            <div className="about-border-line"></div>
                            <h5>about us</h5>
                        </div>
                        <h2>we have provided a quality driver</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil enim sapiente quis magni iusto ex distinctio quam. Repudiandae quaerat consectetur est culpa placeat tenetur pariatur.</p>
                        <button><FontAwesomeIcon icon={faDownload} /> download menu</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;