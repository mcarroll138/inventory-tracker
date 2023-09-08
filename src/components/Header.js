import React from "react";
import image from "./../img/LanternRouge.png";

function header(){
    return (
        <h1><img src={image} alt="An image of the company's logo" /> <br></br>Lantern Rouge Inventory Control System</h1>
    );
}

export default header;