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
                <NavLink href="/components/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Social
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    LinkedIn
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    GitHub
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    CodePen
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Instagram
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