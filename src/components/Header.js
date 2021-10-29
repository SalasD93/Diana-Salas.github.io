import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (
        <header className="d-flex p-2 bg justify-content-between pb-1 main-header">
            <a href="/"><h1 className="align-self-center text-center py-2 px-1 rounded brand">Diana Salas</h1></a>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        </header>
    )
}


export default Header;