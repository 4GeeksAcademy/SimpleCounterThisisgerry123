import React from "react";
//include images into your bundle

//create your first component
function SimpleCounter(props){
    return <div className= "Big Counter">
        <div className=""><i className="fa-regular fa-clock"></i></div>
        <div className="calendar"></div>
        <div className="four"></div>
        <div className="three"></div>
        <div className="two"></div>
        <div className="one"></div>
    </div>
            
}
export default Home;
ReactDOM.render(<Home/>,document.querySelector('#app'));