import React from "react";
import style from "./Skill.module.css"
import {SkillsPropsType} from "../Skills";

export const Skill = (props:SkillsPropsType) => {
    return (
        <article className={style.skillsBlockItem}>
            <div className={style.icon}>
                <span>svgIco</span>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}