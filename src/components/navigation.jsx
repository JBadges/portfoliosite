import React, { Component } from "react";
import "./navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

class Navigation extends Component {
  constructor() {
    super();
    if (window.innerWidth < 768) {
      this.state = { fixpos: "top" };
    } else {
      this.state = { fixpos: "bottom" };
    }
  }

  handleResize = () => {
    if (window.innerWidth < 768) {
      this.setState({
        fixpos: "top"
      });
    } else {
      this.setState({
        fixpos: "bottom"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <Navbar
        scrolling="true"
        light="true"
        expand="md"
        fixed={this.state.fixpos}
      >
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
