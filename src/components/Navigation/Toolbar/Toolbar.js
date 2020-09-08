import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import './Toolbar.css';

const toolbar = props => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo height="80%" />
            <NavigationItems />
        </header>
    );
};

export default toolbar;