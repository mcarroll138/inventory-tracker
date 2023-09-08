import React from "react";

function NewCoffeeForm(){
    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        console.log(event.target.coffeeName.value);
    }
    return (
        <React.Fragment>
            <form onSubmit={handleNewCoffeeFormSubmission}>
                <input
                type="text"
                name="coffeeName"
                placeholder="Coffee Name"/>
                <input
                type="text"
                name="coffeeRoast"
                placeholder="Roast Level"/>
                <button type="submit">Add Coffee</button>
                 </form>
        </React.Fragment>
    );
}

export default NewCoffeeForm;