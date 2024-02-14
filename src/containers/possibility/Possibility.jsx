import React from "react";
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content" >
                {/* <h4>Request early access to get started</h4> */}
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>GPT-3 opens up a world of endless possibilities in natural language processing and artificial intelligence. Its remarkable ability to understand, generate, and manipulate human-like text offers vast potential across numerous domains.</p>
                <h4>Request Early Access to get Started</h4>
            </div>
        </div>
    )
}

export default Possibility;