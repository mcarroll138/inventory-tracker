import React from "react";
import PropTypes from "prop-types";
// import Select from "react-select";

function ReusableForm(props) {
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
  };

  const inputStyles = {
    margin: "8px 0",
    padding: "4px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "12px",
  };

  const buttonStyles = {
    marginTop: "4px",
    marginBottom: "14px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  // const roastLevels = [
  //   { value: "Light Roast", label: "Light Roast" },
  //   { value: "Medium Roast", label: "Medium" },
  // ];

  return (
    <React.Fragment>
      <form style={formStyles} onSubmit={props.formSubmissionHandler}>
        <input
          required
          style={inputStyles}
          type="text"
          name="coffeeName"
          placeholder="Coffee Name"
        />
        <input
          // option={roastLevels}
          // defaultValue={roastLevels[0]}
          // name="label"
          required
          style={inputStyles}
          type="text"
          name="coffeeRoast"
          placeholder="Roast Level"
        />
        <input
          required
          style={inputStyles}
          type="text"
          name="coffeeFlavor"
          placeholder="Tasting Notes"
        />
        <input
          required
          style={inputStyles}
          type="text"
          name="coffeeFarm"
          placeholder="Farm"
        />
        <input
          style={inputStyles}
          type="text"
          name="coffeeOrigin"
          placeholder="Origin"
        />
        <input
          required
          style={inputStyles}
          type="text"
          name="coffeeMethod"
          placeholder="Method"
        />
        <input
          required
          style={inputStyles}
          type="number"
          min="5.00"
          step="0.25"
          max="50.00"
          name="coffeePrice"
          placeholder="Price per pound"
        />
        <input
          required
          style={inputStyles}
          type="number"
          min="130"
          step="130"
          max="6500"
          name="qty"
          placeholder="Quantity"
        />
        <button style={buttonStyles} type="submit">
          {props.buttonText}
        </button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
