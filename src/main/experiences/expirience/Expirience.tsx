import React from "react";
import style from "./Expirience.module.css";
import {ExperiencePropsType} from "../Experiences";

export const Experience = (props: ExperiencePropsType) => {
    return (
        <article className={style.experienceItem}>
            <div className={style.experienceIco}></div>
            <div className={style.experienceLabel}>
                <h2 className={style.experienceTitle}>{props.title} <span>{props.period}</span></h2>
                <div className={style.experienceContent}>
                    <p>{props.exDescribe}</p>
                </div>
            </div>
        </article>
    )
}