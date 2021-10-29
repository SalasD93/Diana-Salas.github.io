import React from 'react';
import {
  Box,
  Container,
  Row,
  FooterLink
} from './FooterStyles';

function Footer() {
  return (
    <Box>
      <Container>
        <Row>
            <FooterLink href="https://github.com/SalasD93?tab=repositories" target="_blank">
              {/* <i className="fab fa-facebook-f"> */}
                <span style={{ marginLeft: "10px" }}>
                  GitHub
                </span>
              {/* </i> */}
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/salasdi/" target="_blank">
              {/* <i className="fab fa-instagram"> */}
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              {/* </i> */}
            </FooterLink>
            <FooterLink href="mailto:salasd10418@gmail.com">
              {/* <i className="fab fa-twitter"> */}
                <span style={{ marginLeft: "10px" }}>
                  Gmail
                </span>
              {/* </i> */}
            </FooterLink>
        </Row>
      </Container>
    </Box>
  );
};


export default Footer;