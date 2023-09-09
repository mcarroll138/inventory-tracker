import React from "react";
import PropTypes from "prop-types";
import image from "./../img/LanternRouge.png";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onClickingSell, onClickingRestock } = props;

  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  };

  const detailStyles = {
    maxWidth: "300px",
    margin: "0 auto",
    padding: "16px",
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    backgroundImage: "url('/img/LanternRouge.png')",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    opacity: "0.9", 
  };

  const buttonStyles = {
    marginTop: "16px",
    marginLeft: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const detailRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  };

  return (
    <React.Fragment>
      <div style={containerStyles}>
        <div style={detailStyles}>
          <h1>Coffee Details</h1>
          <div style={detailRowStyles}>
            <span>Name:</span>
            <span>{coffee.coffeeName}</span>
          </div>
          <div style={detailRowStyles}>
            <span>Roast:</span>
            <span>{coffee.coffeeRoast}</span>
          </div>
          <div style={detailRowStyles}>
            <span>Flavor Notes: </span>
            <span>{coffee.coffeeFlavor}</span>
          </div>
          <div style={detailRowStyles}>
            <span>Farm:</span>
            <span>{coffee.coffeeFarm}</span>
          </div>
          <div style={detailRowStyles}>
            <span>Origin:</span>
            <span>{coffee.coffeeOrigin}</span>
          </div>
          <div style={detailRowStyles}>
            <span>Method:</span>
            <span>{coffee.coffeeMethod}</span>
          </div>
          <div style={detailRowStyles}>
            <span>Price:</span>
            <span>{coffee.coffeePrice}</span>
          </div>
          <div style={detailRowStyles}>
            <span>Stock:</span>
            <span>{props.coffee.qty} lbs</span>
          </div>
        </div>
      </div>
      <div style={detailRowStyles}>
        <button style={buttonStyles} onClick={props.onClickingEdit}>
          Update Details
        </button>
        <button
          style={buttonStyles}
          onClick={() => onClickingDelete(coffee.id)}
        >
          Remove Coffee
        </button>
        <button style={buttonStyles} onClick={() => onClickingSell(coffee.id)}>
          Sell Coffee
        </button>
        <button
          style={buttonStyles}
          onClick={() => onClickingRestock(coffee.id)}
        >
          Restock Coffee
        </button>
      </div>
      <hr />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func,
};

export default CoffeeDetail;
