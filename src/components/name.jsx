import React, { Component } from "react";
import Particles from "react-particles-js";
import "./name.css";
import Navigation from "./navigation";

class Name extends Component {
  render() {
    return (
      <div className="name">
        <Navigation />
        <div className="title">
          <h1>
            <span id="firstName">Jackson</span>
            <span id="lastName"> Brajer</span>
          </h1>
          <p>
            Passionate software developer experienced in critical and hard
            deadline environments. Experienced in optimizing code for time and
            memory performance. Interested in all aspects of technology and
            extremely passionate about the technology in automation.
          </p>
        </div>
        <Particles
          canvasClassName="particle"
          params={{
            fps_limit: 120,
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true
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
      </div>
    );
  }
}

export default Name;
