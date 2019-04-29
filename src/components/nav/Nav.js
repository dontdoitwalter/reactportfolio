import React from 'react';
import './nav.css'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import logo from '../assets/player.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/"><img src={logo} alt='logo' id='logo' /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id='nav' className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Social
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='https://www.linkedin.com/in/walter-van-hooser-81a2a116a/'>
                    LinkedIn
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href='https://github.com/dontdoitwalter'>
                    GitHub
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href='https://codepen.io/dontdoitwalter/'>
                    CodePen
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}