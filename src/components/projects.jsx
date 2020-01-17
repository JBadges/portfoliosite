import React from "react";
import PathFollowing from "./pathFollowing";
import Boids from "./boids";
import FRC2019 from "./frc2019";
import Navigation from "./navigation";

import Particles from "react-particles-js";

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div id="sc" className="scroll-container">
          <Particles
            canvasClassName="projectparticle"
            params={{
              fps_limit: 120,
              particles: {
                number: {
                  value: 300,
                  density: {
                    enable: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  opacity: 0.3
                },
                move: {
                  speed: 1.4
                },
                opacity: {
                  anim: {
                    enable: true,
                    opacity_min: 0.05,
                    speed: 2,
                    sync: false
                  },
                  value: 0.4
                }
              },
              polygon: {
                enable: false,
                scale: 0.75,
                type: "inline",
                move: {
                  radius: 10
                },
                url: "/assets/smalldeer.svg",
                inline: {
                  arrangement: "equidistant"
                },
                draw: {
                  enable: true,
                  stroke: {
                    color: "rgba(255, 255, 255, .2)"
                  }
                }
              },
              retina_detect: false,
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  }
                },
                modes: {
                  bubble: {
                    size: 6,
                    distance: 125
                  }
                }
              }
            }}
          />
          <FRC2019 />
          <PathFollowing />
          <Boids />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
