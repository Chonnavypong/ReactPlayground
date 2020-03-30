import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from "reactstrap";
  import { NavLink as Link } from "react-router-dom";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Navbar color="primary" dark expand="lg">
          <NavbarBrand>
            {/* <link
              className="nav-link text-White"
              exact={true}
              to="/"
              activeClassName="active"
            > */}
            Layout Playground
            {/* </link> */}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" exact to="/" activeClassName="active">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/app_form" activeClassName="active">
                  Form
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link
                  className="nav-link"
                  to="/register"
                  activeClassName="active"
                >
                  Register
                </Link>
              </NavItem> */}
              {/* <NavItem>
                <Link
                  className="nav-link"
                  to="/shop"
                  activeClassName="active"
                >
                  Shop
                </Link>
              </NavItem> */}
  
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      );
}

export default NavBar
