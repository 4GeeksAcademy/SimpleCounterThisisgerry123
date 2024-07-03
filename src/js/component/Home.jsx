//import react into the bundle
import React from "react";
import SimpleCounter from './SimpleCounter'
// include your styles into the webpack bundle

// import "../styles/index.css";
// import './icons.js';

function Home(){


//import your own components
//render your react application
let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);

    counter++;
},1000)

return (<div>

<SimpleCounter digitOne={counter} digitTwo={counter} digitThree={counter} digitFour={counter} />
 </div>   )
}
export default Home;

    //     <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
    //     document.querySelector('#app')
    // );
