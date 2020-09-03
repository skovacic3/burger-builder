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
            {controls.map(control => (
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    more={() => props.more(control.type)}
                    less={() => props.less(control.type)} />
            ))}
        </div>
    );
};

buildControls.propTypes = {
    more: PropTypes.func,
    less: PropTypes.func
};

export default buildControls;