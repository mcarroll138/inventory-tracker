import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ selectedCoffee: selectedCoffee });
  };

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null,
    });
  };

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id !== id
    );
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({ editing: true });
  };

  handleSellingCoffeeClick = (id) => {
    const currentCoffee = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    if (currentCoffee.qty === 0) {
      return alert("Currently Sold Out");
    }

    const coffeeSold = {
      ...currentCoffee,
      qty: currentCoffee.qty - 1,
    };

    const newMainCoffeeList = this.state.mainCoffeeList
      .filter((coffee) => coffee.id !== id)
      .concat(coffeeSold);

    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: coffeeSold,
    });
  };

  handleRestockCoffeeClick = (id) => {
    const currentCoffee2 = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id === id
    )[0];

    const coffeeRestock = {
      ...currentCoffee2,
      qty: currentCoffee2.qty + 130,
    };

    const newMainCoffeeList = this.state.mainCoffeeList
      .filter((coffee) => coffee.id !== id)
      .concat(coffeeRestock);

    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: coffeeRestock,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const buttonStyles = {
      marginTop: "0px",
      display: "block",
      margin: "auto",
      marginBottom: "4px",
      padding: "8px 16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    };

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditCoffeeForm
          coffee={this.state.selectedCoffee}
          onEditCoffee={this.handleEditingCoffeeInList}
        />
      );
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = (
        <CoffeeDetail
          coffee={this.state.selectedCoffee}
          onClickingDelete={this.handleDeletingCoffee}
          onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleSellingCoffeeClick}
          onClickingRestock={this.handleRestockCoffeeClick}
        />
      );
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = (
        <CoffeeList
          coffeeList={this.state.mainCoffeeList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
      );
      buttonText = "Add New Coffee";
    }
    return (
      <React.Fragment>
        <button style={buttonStyles} onClick={this.handleClick}>
          {buttonText}
        </button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default CoffeeControl;
