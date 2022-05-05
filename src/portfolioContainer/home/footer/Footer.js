import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-parent">
                <img
                    src={require("../../../assets/Home/shape-bg.png")}
                    alt="nothing found"
                />
                <img
                    className="under"
                    src={require("../../../assets/Home/shape-bg2.png")}
                    alt="nothing found"
                />
            </div>
        </div>
    );
}
