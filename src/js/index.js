//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home.jsx";

// include your styles into the webpack bundle

import "../styles/index.css";
import './icons.js';
import SimpleCounter from "./component/SimpleCounter.jsx";

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);

    counter++;
ReactDOM.createRoot(
     document.getElementById('app')
     ).render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />)
},1000)


