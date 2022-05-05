import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import imgBack from "./imgBack.png";
import load1 from "./load2.gif";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactMe.css";

export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    let subscribeFade = () => {
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true);
            const res = await axios.post("/contact", data);
            if (
                name.length === 0 ||
                email.length === 0 ||
                message.length === 0
            ) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);
                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }
    };
    subscribeFade();
    return (
        <div className="main-container fade-in" id={props.id || ""}>
            <ScreenHeading title={"Contact Me"} />
            <div className="central-form">
                <div className="img-back">
                    <img src={imgBack} alt="image not found"></img>
                </div>
                <div className="form-cont">
                    <div className="col">
                        <h2 className="title">
                            <Typical
                                steps={["Get In Touch ", 1000]}
                                loop={Infinity}
                            />
                        </h2>
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
                    <div className="back-form">
                        <h4>Send Your Email Here</h4>
                        <form onSubmit={submitForm}>
                            <p>{banner}</p>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                onChange={handleName}
                                value={name}
                            ></input>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                onChange={handleEmail}
                                value={email}
                            ></input>
                            <label htmlFor="message">Message</label>
                            <textarea
                                type="text"
                                onChange={handleMessage}
                                value={message}
                            />
                            <div className="send-btn">
                                <button type="submit">
                                    send <i className="fa fa-paper-plane" />
                                    {bool ? (
                                        <b className="load">
                                            <img
                                                src={load1}
                                                alt="image not responding"
                                            ></img>
                                        </b>
                                    ) : (
                                        ""
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
