import React from "react";

function Venue(){
    return (
        <div> 
        <p id="venue">Venue Information</p>
        <p id="Address">Address</p>

        <div className="arrow-box"> 
        <img id="arrow-logo" src="https://www.flaticon.com/svg/static/icons/svg/54/54785.svg" alt="arrow-logo"></img>
        </div>
        <p id="Street-name">OranienstraBe 200</p>
        <p id="pincode">10999</p> 
        <p id="city"> Berlin</p>
        <p id="map">See map</p>
        </div>
    );
}

export default Venue;