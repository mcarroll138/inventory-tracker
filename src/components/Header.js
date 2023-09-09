import React from "react";
import image from "./../img/LanternRouge.png";

function header() {
  const imageStyle = {
    maxWidth: "25%",
    width: "auto",
    marginRight: "20px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <h2 style={containerStyle}>
      <img
        src={image}
        alt="Lantern Rouge company's logo"
        style={imageStyle}
      />
      <br></br>Inventory Control System
    </h2>
  );
}

export default header;
