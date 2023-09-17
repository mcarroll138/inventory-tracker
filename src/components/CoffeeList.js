import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  const detailStyles = {
    width: "auto",
    height: "auto",
    margin: "0 auto",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    backgroundPosition: "center",
    opacity: "0.9",
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <h4 style={detailStyles}>☕️Current Offerings</h4>
      <hr />
      {props.coffeeList.map((coffee) => (
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          coffeeName={coffee.coffeeName}
          coffeeRoast={coffee.coffeeRoast}
          coffeePrice={coffee.coffeePrice}
          qty={coffee.qty}
          id={coffee.id}
          key={coffee.id}
        />
      ))}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
};

export default CoffeeList;
