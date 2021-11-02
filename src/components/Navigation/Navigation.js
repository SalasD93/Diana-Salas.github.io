import React from 'react';
import { NavList, NavItem, NavLink } from './NavigationStyles';

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <NavList className="rounded">
            {tabs.map(tab => (
                <NavItem key={tab}>
                    <NavLink
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                    >
                        {tab}
                    </NavLink>
                </NavItem>
            ))}
        </NavList>
    );
}


export default Navigation;