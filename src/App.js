import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katieZaferes from '../src/images/katieZaferes.png';




export default function App(){
    return(
        <>
        <div className='container'>
        <Navbar/>
        <Hero/>
        <Card
        img = {katieZaferes}
        rating = "(5.0)"
        reviewCount = {6}
        country = "Uganada"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
   />
        <Card
        img = {katieZaferes}
        rating = "(3.0)"
        reviewCount = {7}
        country = "Kenya"
        title = "Life Lessons with Katie Zaferes"
        price = {130}
   />
         </div>
        
        </>
    )   
}


/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/