import React from 'react';
import './style.css';

import airbnbLogo from '../images/airbnbLogo.png';



export default function Navbar(){
return(
    <nav>
    <img src={airbnbLogo} alt='nav logo' className="nav--logo" />
      </nav>
    )
}