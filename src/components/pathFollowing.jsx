import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./projects.css";
import YouTube from "react-youtube";

export default () => {
  const opts = {
    playerVars: {
      autoplay: "1",
      controls: "0",
      loop: "1",
      playlist: "n4LG-JH9QOM"
    }
  };

  return (
    <div className="page pathfollowing">
      <Container fluid="true">
        <Row>
          <Col>
            <div className="description">
              <h2>Path Following Autonomous Control</h2>
              <p>
                Using quintic hermite splines and wheel rotation feedback from
                the robot, position in a 2D environment is derived and used to
                predict the robots location to correct any missed trajectories.
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
          <Col className="d-none d-sm-block">
            <YouTube className="yt" opts={opts} videoId="n4LG-JH9QOM" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
