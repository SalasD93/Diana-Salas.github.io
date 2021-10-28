import React from 'react';

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <ul>
            {tabs.map(tab => (
                <li key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        // className={}
                    >
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}


export default Navigation;