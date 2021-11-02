import styled from 'styled-components';


export const NavList = styled.ul`
    list-style-type: none;
    padding: 0 0 0 25% !important;
    margin: 0 !important;
    overflow: hidden;
    background-color: var(--dark-color);
    opacity: 0.85;
    text-align: center;

    @media (max-width: 1025px) {
        padding: 0 0 0 20% !important;
    }
    @media (max-width: 769px) {
        padding: 0 0 0 10% !important;
    }
    @media (max-width: 415px) {
        padding: 3.5% 0 !important;
    }
    @media (max-width: 376px) {
        padding: 4% 0 !important;
    }
`;

export const NavItem = styled.li`
    float: left;
    padding: .55% 2%;
    text-align: center;
`;


export const NavLink = styled.a`
    display: inline-block;
    text-align: center;
    color: var(--dark-color);
    text-decoration: none;
    font-weight: bolder;
    font-size: 2.25rem;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;

    &:visited {
        color: var(--soft-color);
    }
    &:hover {
        color: var( --secondary-color);
        transform: scale(1.2);
    }
    &:focus {
        color: var( --secondary-color);
    }

    @media (max-width: 415px) {
        font-size: 1.5rem;
    }
    @media (max-width: 376px) {
        font-size: 1.35rem;
    }
`;