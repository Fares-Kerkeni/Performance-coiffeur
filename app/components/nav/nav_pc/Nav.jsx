import React from "react";
import style from "./nav.module.scss";

const Nav = (props) => {
  console.log(props.page);
  return (
    <nav className={style.container_nav}>
      {props.page === "header" && (
        <>
          <a href="#" className={style.point_black}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
        </>
      )}
      {props.page === "a_propos" && (
        <>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point_black}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
        </>
      )}
      {props.page === "service" && (
        <>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point_black}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
        </>
      )}
      {props.page === "prix" && (
        <>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point_black}></a>
          <a href="#" className={style.point}></a>
        </>
      )}
      {props.page === "contact" && (
        <>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point}></a>
          <a href="#" className={style.point_black}></a>
        </>
      )}
    </nav>
  );
};

export default Nav;
