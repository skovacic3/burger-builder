import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = props => {
    return (
        <div className="SideDrawer">
            <Logo height="11%" />
            <nav>
                <NavigationItems />
            </nav>

        </div>
    );
};

sideDrawer.propTypes = {

};

export default sideDrawer;