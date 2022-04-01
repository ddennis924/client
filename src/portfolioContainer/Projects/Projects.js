import React, { usEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description:
      "lorem ipsim lorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsim",
    highlights: {
      bullets: [
        "Full stack web development",
        "Interactive Front End design",
        "Test Driven Design",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="highlight-heading">
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlights()}
            <div className="about-me-options">
              <button className="btn primary-btn">
                {""}
                Contact Me{""}
              </button>
              <a href="DenResume.pdf" download="DenResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
