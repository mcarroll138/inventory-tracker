import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
    const { coffee, onClickingDelete, onClickingSell, onClickingRestock } = props;

    return (
        <React.Fragment>
            <h1>Coffee Details</h1>
            <h3>Name: {coffee.coffeeName}
            Roast: {coffee.coffeeRoast}
            Flavor Notes: {coffee.coffeeFlavor}
            Farm: {coffee.coffeeFarm}
            Origin: {coffee.coffeeOrigin}
            Method: {coffee.coffeeMethod}
            Price: {coffee.coffeePrice}
            Stock: {props.coffee.qty} lbs</h3>
            <button onClick={ props.onClickingEdit }>Update Details</button>
            <button onClick={()=> onClickingDelete(coffee.id)}>Remove Coffee</button>
            <button onClick={()=> onClickingSell(coffee.id)}>Sell Coffee</button>
            <button onClick={()=> onClickingRestock(coffee.id)}>Restock Coffee</button>
            <hr/>
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
    
    