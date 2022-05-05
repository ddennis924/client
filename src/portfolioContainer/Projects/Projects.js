import React, { usEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import EncoreImage from "./Encore.png";
import MunchmapImage from "./Munchmap.png";
import WebsiteImage from "./Website.png";

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen != props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const PROJECTS = [
        {
            title: "Encore",
            description: "Spotify Song Guessing Game",
            gitLink: "https://github.com/ddennis924/EncoreGame",
            img: EncoreImage,
            tags: ["Javascript", "Node.js", "HTML", "Express.js", "CSS"],
            link: "https://nwencore.herokuapp.com/",
        },
        {
            title: "MunchMap",
            description: "Spotify Song Guessing Game",
            gitLink: "https://github.com/ddennis924/EncoreGame",
            img: MunchmapImage,
            tags: ["Java", "Swing", "OOP"],
        },
        {
            title: "This Website!",
            description: "",
            gitLink: "https://github.com/ddennis924/EncoreGame",
            img: WebsiteImage,
            tags: ["Javascript", "React.js", "HTML", "CSS", "Node.js"],
        },
    ];
    let printTags = (tagslist) => {
        return tagslist.map((tag, i) => (
            <li key={tag} className="project-tag">
                {tag}
            </li>
        ));
    };
    const printProjects = () => {
        return PROJECTS.map((project, i) => (
            <div className="project-card">
                <img
                    className="project-image"
                    src={project.img}
                    alt="connection unstable"
                ></img>
                <div className="project-details">
                    <div className="project-heading">
                        <span>{project.title}</span>
                    </div>
                    <div className="project-description">
                        <span>{project.description}</span>
                    </div>
                    <div className="project-options">
                        {project.link ? (
                            <a href={project.link}>
                                <button className="btn primary-btn">
                                    Try it
                                </button>
                            </a>
                        ) : (
                            <div></div>
                        )}
                        <a href={project.gitLink}>
                            <button className="btn highlighted-btn">
                                GitHub
                            </button>
                        </a>
                    </div>
                    <div className="project-tags-container">
                        {printTags(project.tags)}
                    </div>
                </div>
            </div>
        ));
    };
    return (
        <div
            className="projects-container screen-container"
            id={props.id || ""}
        >
            <div className="projects-parent">
                <ScreenHeading title={"Projects"} />
                <div className="projects">{printProjects()}</div>
            </div>
        </div>
    );
}
