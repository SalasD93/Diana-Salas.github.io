import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Heading, Brand } from './HeaderStyles'

function Header(props) {
    return (
        <Heading>
            <a href="/"><Brand className="align-self-center text-center py-3 px-1 rounded">Diana Salas</Brand></a>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        </Heading>
    )
}


export default Header;