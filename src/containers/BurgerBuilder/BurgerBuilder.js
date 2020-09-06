import React, {
    Component
} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 0.5,
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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients)
            .map(ingredient => {
                return ingredients[ingredient]
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type]
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredient
        });
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount !== 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            };
            updatedIngredient[type] = updatedCount;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICES[type]
            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredient
            });
            this.updatePurchaseState(updatedIngredient);

        }
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    PurchaseCancleHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    render() {
        return ( <
            Auxiliary >
            <
            Modal show = {
                this.state.purchasing
            }
            modalClosed = {
                this.PurchaseCancleHandler
            } >
            <
            OrderSummary ingredients = {
                this.state.ingredients
            }
            /> <
            /Modal> <
            Burger ingredients = {
                this.state.ingredients
            }
            /> <
            BuildControls more = {
                this.addIngredientHandler
            }
            less = {
                this.removeIngredientHandler
            }
            price = {
                this.state.totalPrice
            }
            purchasable = {
                !this.state.purchasable
            }
            ordered = {
                this.purchaseHandler
            }
            /> <
            /Auxiliary>
        );
    }
}

export default BurgerBuilder;