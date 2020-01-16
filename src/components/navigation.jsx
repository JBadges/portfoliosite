import React, { Component } from "react";
import "./navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Navbar scrolling="true" light="true" expand="md" fixed="bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" fill="true">
            {this.props.location.pathname !== "/" && (
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            )}
            {this.props.location.pathname !== "/projects" && (
              <NavLink className="navlink" to="/projects">
                Projects
              </NavLink>
            )}
            {this.props.location.pathname !== "/contact" && (
              <NavLink className="navlink" to="/contact">
                Contact
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
