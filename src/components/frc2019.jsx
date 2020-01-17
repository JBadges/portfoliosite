import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./projects.css";
import YouTube from "react-youtube";

export class FRC2019 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleScroll = () => {
    const container = document.getElementById("sc");
    this.setState({
      arrowOpacity: 1 - Math.pow(container.scrollTop / this.vh(75), 1.75)
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  vh = v => {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  };

  render() {
    return (
      <div className="page frc2019">
        <Container fluid="true">
          <Row>
            <Col className="d-none d-lg-block">
              <YouTube className="yt" videoId="EUUZhxSoz1M" />
            </Col>
            <Col>
              <div className="description">
                <h2>
                  FRC 2019 Robot Code <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Destination:_Deep_Space"
                  >
                    Destination: Deep Space
                  </a>
                </h2>
                <p>
                  Mantis, the robot, was controlled with many different and
                  custom built control systems to maximize every inch of
                  performance possible. Each task of the robot could be
                  performed concurrently to save time. With all these systems
                  running at once, a robust controller to maintain a regular
                  delta time was needed. The robot ran at a constant 10ms cycle
                  or 100 times a second.
                  <br />
                </p>
                <Button
                  variant="outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Team610/2019-Public"
                >
                  Code here
                </Button>
                <Button
                  variant="outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/playlist?list=PLk5eW4p_ePO_teylwSzvCRUFFtUrgo0FM"
                >
                  Extra Videos
                </Button>
              </div>
            </Col>
            <Col className="d-none d-md-block">
              <YouTube className="yt" videoId="FMv0c5e1aM4" />
            </Col>
          </Row>
        </Container>
        <div className="contentDiv">
          <i
            style={{ opacity: this.state.arrowOpacity }}
            className="arrow fa fa-angle-double-down"
          ></i>
        </div>
      </div>
    );
  }
}

export default FRC2019;
