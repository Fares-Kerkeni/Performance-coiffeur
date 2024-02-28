"use client";
import React, { useState, useEffect } from "react";
import style from "./nav.module.scss";
import Hamburger from "hamburger-react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

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
      <div className={isOpen ? `${style.show}` : style.links}>
        {/* Utilisez une condition ternaire pour inclure la classe `style.show` si isOpen est vrai */}
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>
    </nav>
  );
};

export default Nav;
