import styled from 'styled-components';

export const Box = styled.footer`
  padding: 5px 5px;
  background: #385785;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  

  @media (max-width: 1000px) {
    padding: 20px 5px;
  }

  @media (max-width: 769px) {
    padding: 10px 5px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Row = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 20px;
  @media (max-width: 1000px) {
    // grid-template-columns: 60px 25px 25px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: #ffff;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 1.25rem;
  text-decoration: none;

  &:hover {
      color: #B8E1FF;
      transition: 200ms ease-in;
  }

  &:focus {
    color: #002C45;
  }
`;