import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (
        <div className="d-flex p-2 bg justify-content-between pb-1">
            <h1 className="align-self-center py-2 rounded">Diana Salas</h1>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        </div>
    )
}


export default Header;