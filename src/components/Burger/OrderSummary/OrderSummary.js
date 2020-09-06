import React from "react";
import PropTypes from "prop-types";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from '../../UI/Button/Button'

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
            <p><strong>Total price: {props.price}$</strong></p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType="Success">CONTINUE</Button>
        </Auxiliary>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object,
    clicked: PropTypes.func,
    price: PropTypes.number
};

export default orderSummary;
