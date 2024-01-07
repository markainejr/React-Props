import React from "react";
import photoGrid from '../images/photoGrid.png';
import './style.css';

export default function Hero(){
    return(
     <section className="hero">
        <img src={photoGrid} alt="photoGrid" className="hero--photo"/>

        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join Unique interactive activities led by one-of-a-kind hosta-all without leaving home.</p>
     </section>
    )
}