import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.css';

const Backdrop = props => {
    return (
        props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
    );
};

Backdrop.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func
};

export default Backdrop;