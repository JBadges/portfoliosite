import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./projects.css";

export default () => {
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
          <Col>
            <video autoPlay loop auto="true" controls>
              <source src="/assets/AutoSimulation.mp4" type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
