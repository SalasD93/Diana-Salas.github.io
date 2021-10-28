import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (
        <div>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        </div>
    )
}


export default Header;