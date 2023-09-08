import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
        return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                type="text"
                name="coffeeName"
                placeholder="Coffee Name"/>
                <input
                type="text"
                name="coffeeRoast"
                placeholder="Roast Level"/>
                <input
                type="text"
                name="coffeeFlavor"
                placeholder="Tasting Notes"/>
                <input
                type="text"
                name="coffeeFarm"
                placeholder="Farm"/>
                <input
                type="text"
                name="coffeeOrigin"
                placeholder="Origin"/>
                <input
                type="text"
                name="coffeeMethod"
                placeholder="Method"/>
                <input
                type="text"
                name="coffeePrice"
                placeholder="Price per pound"/>
                <input
                type="text"
                name="qty"
                placeholder="Quantity"/>
                <button type="submit">{props.buttonText}</button>
                 </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;