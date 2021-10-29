import React from 'react';

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <ul className="d-inline-flex flex-row align-items-end mb-0 nav-list">
            {tabs.map(tab => (
                <li key={tab} className="mx-2">
                    <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className="nav-link pb-0 pt-3"
                    >
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}


export default Navigation;