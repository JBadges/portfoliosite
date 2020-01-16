import React, { Component } from "react";
import Particles from "react-particles-js";
import HackerText, { hackerTextFunction } from "react-hacker-text";
import Navigation from "./navigation";

class Contact extends Component {
  setStyleStart = () => {
    console.log("start");
  };

  setStyleDone = () => {
    console.log("end");
  };
  render() {
    return (
      <React.Fragment>
        <HackerText
          text="react-hacker-text 😄🎉"
          speed="60"
          changes="5"
          onStart={this.setStyleStart}
          onFinished={this.setStyleDone}
        />
        <Navigation />
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
      </React.Fragment>
    );
  }
}

export default Contact;
