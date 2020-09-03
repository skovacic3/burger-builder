import React from 'react';
import PropTypes from 'prop-types';

import './BuildControl.css';

const buildControl = props => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button onClick={props.less} className="Less">Less</button>
            <button onClick={props.more} className="More">More</button>
        </div>
    );
};

buildControl.propTypes = {
    more: PropTypes.func,
    less: PropTypes.func
};

export default buildControl;