import React from 'react';
import PropTypes from 'prop-types';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    //Object.keys(props.ingredients) - makes an array of the keys of props.ingredients => [salad, bacon, meat, cheese]
    let transformedIngredients = Object.keys(props.ingredients)
    //this part goes through every ingredientKey and makes an empty array with the length of the keys value
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            //this map returns a BurgerIngredient component with the type set as cheese,meat, etc... but as many times as needed because of the lenght of the array 
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [] );
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients</p>;
    }
    console.log(transformedIngredients);
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

burger.propTypes = {
    ingredients: PropTypes.object
};

export default burger;