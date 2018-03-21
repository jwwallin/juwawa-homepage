import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar className="navbar" inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="http://www.juwawa.fi"><img className="navbar-logo" src="./JW_logo_v1.png" alt="www.juwawa.fi"/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="navbar-links">
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
          </Nav>
          <Navbar.Text className="navbar-greeting" pullRight>Have a great day!</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;