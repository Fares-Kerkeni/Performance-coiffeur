"use client";

import React, { useState, useEffect } from "react";
import style from "./nav.module.scss";
import Hamburger from "hamburger-react";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  // useEffect(() => {
  //   // Initialise AOS uniquement côté client
  //   if (process.browser) {
  //     AOS.init();
  //   }
  // }, []);
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    // Nettoyage lors de la désactivation du composant
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
      <div
        className={`${style.container_links_hamburger} ${
          isOpen ? style.show : ""
        }`}
        // data-aos="fade-left"
      >
        <div className={style.links}></div>
      </div>
    </nav>
  );
};

export default Nav;
