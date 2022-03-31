import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/dennis.li.568">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/d34/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/denniss.li/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/ddennis924">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          {/* <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              <span className="highlighted-text">Dennis</span>
            </span>
          </div> */}

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <a className="profile-role-tagline">Hey I'm</a>
              <h1>
                {" "}
                <Typical
                  steps={[
                    "Dennis Li",
                    1500,
                    "a Learner",
                    1000,
                    "an Aspiring Developer",
                    1000,
                    "a UBC Junior",
                    1000,
                    "a Problem Solver",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Contact Me{""}
            </button>
            <a href="DenResume.pdf" download="DenResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
