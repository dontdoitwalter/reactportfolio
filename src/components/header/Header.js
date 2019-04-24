import React from 'react';
import './header.css';
import {Container, Row, Col} from 'reactstrap';
import {LOGO} from '../../components/assets/laptop.svg';

const Header = () =>{
    return(
        <Container id='header'>
            <Row>
                <Col id='logo-col'>
                    <img src={LOGO} alt='logo' />
                </Col>
                <Col id='nav-col'>
                    <p>Home Projects Social Contact</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Header;