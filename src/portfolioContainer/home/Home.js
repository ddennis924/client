import React from "react";
import Profile from "./profile/Profile";
import Footer from "./footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
}
