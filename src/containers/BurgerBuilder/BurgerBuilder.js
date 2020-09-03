import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 1,
    cheese : 0.5,
    meat: 2,
    bacon: 0.2
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type]
        this.setState({totalPrice : newPrice, ingredients: updatedIngredient});
    }
    
    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if(oldCount !== 0){
            const updatedCount = oldCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            };
            updatedIngredient[type] = updatedCount;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICES[type]
            this.setState({totalPrice : newPrice, ingredients: updatedIngredient});

        }
    }

    render () {
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    more={this.addIngredientHandler}
                    less={this.removeIngredientHandler} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;