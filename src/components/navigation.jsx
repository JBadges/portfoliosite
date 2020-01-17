import React, { Component } from "react";
import "./navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

class Navigation extends Component {
  constructor() {
    super();
    if (window.innerWidth < 768) {
      this.state = { greybg: "greybg" };
    } else {
      this.state = { greybg: "" };
    }
  }

  handleResize = () => {
    if (window.innerWidth < 768) {
      this.setState({
        greybg: "greybg"
      });
    } else {
      this.setState({
        greybg: ""
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
      <Navbar scrolling="true" light="true" expand="md" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" fill="true">
            {this.props.location.pathname !== "/" && (
              <NavLink className={this.state.greybg + " navlink"} to="/">
                Home
              </NavLink>
            )}
            {this.props.location.pathname !== "/projects" && (
              <NavLink
                className={this.state.greybg + " navlink"}
                to="/projects"
              >
                Projects
              </NavLink>
            )}
            {this.props.location.pathname !== "/contact" && (
              <NavLink className={this.state.greybg + " navlink"} to="/contact">
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
