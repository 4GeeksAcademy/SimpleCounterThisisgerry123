//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle

import "../styles/index.css";
import './icons.js';

function SimpleCounter(props){
    return <div className=" Big Counter">
        <div className=""><i className="fa-regular fa-clock"></i></div>
        <div className="calendar"></div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
    </div>
} 
SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};  

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);

    counter++;
},1000);
//import your own components
//render your react application
    ReactDOM.render (
        <SimpleCounter digitOne={counter.indexOf()} />,
        document.querySelector,('#app')
    );
