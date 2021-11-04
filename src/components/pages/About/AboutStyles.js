import styled from 'styled-components';

export const Image = styled.img`
    align-self: center;
    width: 25vw;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffff;
    margin: 5% 5% 20% 5%;
    padding: 2%;
    border: 2px solid #A9FFF7;
    border-radius: 20px;
    font-size: 1.25rem;

    @media (max-width: 769px) {
        margin: 20% 5% 50% 5%;
    }
`;

export const Header = styled.h2`
    color: #A9FFF7;
    margin-bottom: 2%;
    font-weight: bolder;
    font-size: 3rem;
    border-bottom: 3px solid #A9FFF7;
`;