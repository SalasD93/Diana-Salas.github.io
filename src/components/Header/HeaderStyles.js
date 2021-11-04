import styled from 'styled-components';

export const Heading = styled.header`
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovLNLT0zhRgYS46DpzAztx66ZcfhGvwE7m4FXZK7IFW3PMEz5InGJjhxnxbTLu4NVfss&usqp=CAU");
    width: 100%;
    height: 130px;
    z-index: 9999;
`;

export const Brand = styled.h1`
    opacity: 0.85;
    margin-bottom: 0 !important;
    color: var(--dark-color);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: var(--soft-color);
    padding-bottom: 0.25rem !important;

    @media (max-width: 1025px) {
        padding-top: .75rem !important;
        padding-bottom: .75rem !important;
    }
    @media (max-width: 769px) {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }
    @media (max-width: 376px) {
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 1.2rem !important;
`;