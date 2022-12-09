import React from "react";
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";

export type SkillsPropsType = {
    title: string,
    description: string
}

export const Skills = () => {
    return (
        <section className={style.skillMain}>
            <header className={style.sectionHeader}>
                <h4>MY SPECIALTY</h4>
                <h2>MY SKILLS</h2>
            </header>
            <div className={style.sectionContent}>
                <div className={style.skillsBlock}>
                    <Skill title={"HTML"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem?"}/>
                    <Skill title={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem?"}/>
                    <Skill title={"JavaScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem?"}/>
                    <Skill title={"TypeScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem?"}/>
                    <Skill title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem?"}/>
                    <Skill title={"Redux"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem?"}/>

                </div>
            </div>
        </section>
    )
}