// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverDetails = {
    backgroundColor: isHovered ? "#e0e0e0" : "transparent",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const detailStyles = {
    width: "300px",
    // height: "300px",
    margin: "16px",
    padding: "16px",
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    backgroundImage: "url('/img/LanternRouge.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "0.9",
    display: "inline-block",
    verticalAlign: "top",
  };

  return (
    <React.Fragment>
      <div style={detailStyles}>
        <div
          style={hoverDetails}
          onClick={() => props.whenCoffeeClicked(props.id)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3>Name: {props.coffeeName}</h3>
          <h3>Roast Level: {props.coffeeRoast}</h3>
          <h3>Price: {props.coffeePrice}</h3>
          <h3>Quantity: {props.qty} lbs</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  coffeeName: PropTypes.string.isRequired,
  coffeeRoast: PropTypes.string.isRequired,
  coffeeFlavor: PropTypes.string.isRequired,
  coffeeFarm: PropTypes.string.isRequired,
  coffeeOrigin: PropTypes.string.isRequired,
  coffeeMethod: PropTypes.string.isRequired,
  coffeePrice: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
};

export default Coffee;
