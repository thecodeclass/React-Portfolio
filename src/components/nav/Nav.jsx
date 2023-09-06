import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BiSolidUser } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "about" ? "active" : ''}
      >
        <FcAbout />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "experience" ? "active" : ''}
      >
        <BiSolidUser />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "services" ? "active" : ''}
      >
        <GrServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BiSolidContact />
      </a>
    </nav>
  );
};

export default Nav;
