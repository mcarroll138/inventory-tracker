import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";

class CoffeeControl extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: []
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }

    handleAddingNewCoffeeToList = (newCoffee) => {
        const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({mainCoffeeList: newMainCoffeeList,
        formVisibleOnPage: false});
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
            buttonText = "Return to Coffee List";
        } else {
            currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList}/>;
            buttonText= "☕️Add New Coffee☕️"
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

export default CoffeeControl;
