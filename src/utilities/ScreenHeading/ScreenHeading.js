import React from "react";
import "./ScreenHeading.css";
import Bamboo from "./bamboo.png";

export default function ScreenHeading(props) {
    return (
        <div className="heading-container">
            <div className="screen-heading">
                <span>{props.title}</span>
            </div>

            {props.subHeading ? (
                <div className="screen-sub-heading">
                    <span>{props.subHeading}</span>
                </div>
            ) : (
                <div></div>
            )}

            <div className="heading-separator">
                <div className="separator-line">
                    <img src={Bamboo} className="separator-blob"></img>
                </div>
            </div>
        </div>
    );
}
