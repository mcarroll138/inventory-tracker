import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";

class CoffeeControl extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }

    handleClick = () => {
        this.setState({formVisibleOnPage: true});
    }

    render(){
        let currentlyVisibleState = null;
        let addCoffeeButton = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCoffeeForm />
        } else {
            currentlyVisibleState = <CoffeeList />
            addCoffeeButton = <button onClick={this.handleClick}>☕️Add New Coffee☕️</button>
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                {addCoffeeButton}
            </React.Fragment>
        );
    }
}

export default CoffeeControl;
