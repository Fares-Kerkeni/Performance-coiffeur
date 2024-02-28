"use client";
import React, { useState, useEffect } from "react";
import style from "./nav.module.scss";
import Hamburger from "hamburger-react";
import "aos/dist/aos.css";
import AOS from "aos";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    // Clean up when the component is unmounted
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav>
      <div className={style.hamburger}>
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>
      <div className={isOpen ? `${style.show}` : style.none}>
        <div className={style.container_nav}>
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
        <div className={style.container_links}>
          <a href="#propo">A prpos</a>
          <a href="#nosservices">Nos services</a>
          <a href="#nosprix">Nos prix</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
