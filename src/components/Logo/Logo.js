import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="myBurger"/>
        </div>
    )
}

export default logo;