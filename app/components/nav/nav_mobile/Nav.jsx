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

  const closeMenu = () => {
    setOpen(false);
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
          <a href="#propo" onClick={closeMenu}>
            A propos
          </a>
          <a href="#nosservices" onClick={closeMenu}>
            Nos services
          </a>
          <a href="#nosprix" onClick={closeMenu}>
            Nos prix
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
