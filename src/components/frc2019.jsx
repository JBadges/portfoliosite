import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./projects.css";
import YouTube from "react-youtube";

export default () => {
  return (
    <div className="page frc2019">
      <Container fluid="true">
        <Row>
          <Col className="d-none d-lg-block robotphotocontainer">
            <img
              className="robotphoto"
              src="/assets/mantis_2.jpg"
              alt="mantis robot photo"
            ></img>
          </Col>
          <Col>
            <div className="description">
              <h2>
                FRC 2019 Robot Code <br />
                <a href="https://en.wikipedia.org/wiki/Destination:_Deep_Space">
                  Destination: Deep Space
                </a>
              </h2>
              <p>
                Mantis, the robot, was controlled with many different and custom
                built control systems to maximize every inch of performance
                possible. Each task of the robot could be performed concurrently
                to save time. With all these systems running at once a rhobust
                controller to maintain a regular delta time was needed. The
                robot ran at a constant 10ms cycle or 100 times a second.
                <br />
              </p>
              <Button
                variant="outline-info"
                className="codelink"
                target="_blank"
                href="https://github.com/Team610/2019-Public"
              >
                Code here
              </Button>
              <Button
                variant="outline-info"
                className="codelink"
                target="_blank"
                href="https://github.com/Team610/2019-Public"
              >
                Extra Videos
              </Button>
            </div>
          </Col>
          <Col>
            <YouTube className="yt" videoId="FMv0c5e1aM4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
