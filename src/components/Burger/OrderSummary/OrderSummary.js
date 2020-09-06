import React from "react";
import PropTypes from "prop-types";
import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        (ingredient, index) => {
            return (
                <li key={index}>
                    {ingredient}: {props.ingredients[ingredient]}
                </li>
            );
        },
    );
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>The burger has the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to checkout?</p>
            <button>Cancel</button>
            <button>Continue</button>
        </Auxiliary>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object,
};

export default orderSummary;
