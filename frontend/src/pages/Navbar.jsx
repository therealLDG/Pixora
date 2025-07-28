import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <img
            src="/images/night-cafe-logo-white.webp"
            alt="logo"
            width={"25%"}
          />
        </Link>
      </div>
      <div className="options">
        <Link
          style={{ textDecoration: "none", color: "#BCC1c3" }}
          to="/explore"
        >
          Explore
        </Link>
        <Link to="/Create" style={{ textDecoration: "none", color: "#fff" }}>
          {" "}
          <p
            className="btn mt-3"
            style={{ backgroundColor: "#e9506d", color: "#fff" }}
          >
            Create <i class="fa-solid fa-wand-magic-sparkles"></i>
          </p>
        </Link>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
  );
}
