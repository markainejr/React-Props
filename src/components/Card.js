import React from "react";
import star from '../images/star.png';
import './style.css'
export default function Card(props) {
    return(
        <div className="main">
            <img src={props.img} alt="katiZaferes" className="katie--photo"/>
            <div className="motion">
            <img src= {star} alt="star" className="star--photo"/>
            <p className="first-text"><span className="grey"> {props.rating} {props.reviewCount} . {props.country}  </span></p>
            </div>
        
            <p> {props.title} </p>
            <p><span>From $ {props.price}</span>/ person</p> 
            

        </div>
    )
}