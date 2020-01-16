import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./projects.css";

export default () => {
  return (
    <div className="page boids">
      <Container fluid="true">
        <Row>
          <Col>
            <video autoPlay loop auto="true" controls>
              <source src="/assets/AutoSimulation.mp4" type="video/mp4" />
            </video>
          </Col>
          <Col>
            <div className="description">
              <h2>BOIDS Simulation in C++</h2>
              <p>
                BOIDS is commonly used in computer graphics to simulate the
                actions of a flock of birds. It simulates the movement of the
                flock by using three main factors: cohesion, seperation and
                alignment.
                <br />
              </p>
              <Button
                variant="outline-info"
                className="codelink"
                target="_blank"
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
