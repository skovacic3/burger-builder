import React from 'react';
import PropTypes from 'prop-types';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = props => {
    return (
        <div className="BuildControls">
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(control => (
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    more={() => props.more(control.type)}
                    less={() => props.less(control.type)} />
            ))}
            <button 
            className="OrderButton"
            disabled={props.purchasable}
            onClick={props.ordered}>
                Order
            </button>
        </div>
    );
};

buildControls.propTypes = {
    more: PropTypes.func,
    less: PropTypes.func,
    price: PropTypes.number,
    purchasable: PropTypes.bool,
    ordered: PropTypes.func
};

export default buildControls;