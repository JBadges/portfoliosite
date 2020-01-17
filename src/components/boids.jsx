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
      playlist: "rTUOY4oz_pI"
    }
  };

  return (
    <div className="page boids">
      <Container fluid="true">
        <Row>
          <Col className="d-none d-md-block">
            <YouTube className="yt" opts={opts} videoId="rTUOY4oz_pI" />
          </Col>
          <Col>
            <div className="description">
              <h2>BOIDS Simulation in C++</h2>
              <p>
                BOIDS is commonly used in computer graphics to simulate the
                actions of a flock of birds. It simulates the movement of the
                flock by using three main factors: cohesion, separation and
                alignment.
                <br />
              </p>
              <Button
                variant="outline-info"
                target="_blank"
                className="w-100"
                rel="noopener noreferrer"
                href="https://github.com/JBadges/BOIDS"
              >
                Code here
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
