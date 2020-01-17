import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./projects.css";
import YouTube from "react-youtube";

const opts = {
  playerVars: {
    autoplay: "1",
    controls: "0",
    loop: "1",
    playlist: "n4LG-JH9QOM"
  }
};

class PathFollowing extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleScroll = () => {
    const container = document.getElementById("sc");
    this.setState({
      arrowOpacity:
        1 - Math.pow((container.scrollTop - this.vh(100)) / this.vh(75), 1.75)
    });
    console.log(container.scrollTop);
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
      <div className="page pathfollowing">
        <Container fluid="true">
          <Row>
            <Col>
              <div className="description">
                <h2>Path Following Autonomous Control</h2>
                <p>
                  Using Quintic Hermite Splines and wheel rotation feedback from
                  the robot, position in a 2D environment is derived and used to
                  predict the location of the robot to correct any missed
                  trajectories.
                  <br />
                </p>
                <Button
                  variant="outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/JBadges/SplinePursuit/blob/master/src/main/java/auto/actions/SplineDrivePath.java"
                >
                  Code here
                </Button>
                <Button
                  variant="outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/JBadges/SplinePursuit/blob/master/src/main/java/auto/actions/SplineDrivePath.java"
                >
                  Extra Videos
                </Button>
              </div>
            </Col>
            <Col className="d-none d-md-block">
              <YouTube className="yt" opts={opts} videoId="n4LG-JH9QOM" />
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

export default PathFollowing;
