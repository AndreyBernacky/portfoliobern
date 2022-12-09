import React from "react";
import style from './Navigation.module.css'

export const Navigation = () => {
    return (
        <ul className={style.navigationMain}>
            <li><a href="#" className={style.active}>ABOUT</a></li>
            <li><a href="#">SKILLS</a></li>
            <li><a href="#">EXPERIENCE</a></li>
            <li><a href="#">WORK</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>

    )
}