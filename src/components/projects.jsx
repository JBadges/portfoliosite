import React from "react";
import PathFollowing from "./pathFollowing";
import Boids from "./boids";
import FRC2019 from "./frc2019";
import Navigation from "./navigation";

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="scroll-container">
          <PathFollowing />
          <Boids />
          <FRC2019 />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
