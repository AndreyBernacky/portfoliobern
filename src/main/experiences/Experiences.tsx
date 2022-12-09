import React from "react";
import style from "./Experiences.module.css";
import {Experience} from "./expirience/Expirience";

export type ExperiencePropsType = {
    title:string,
    period:string,
    exDescribe:string
}

export const Experiences = () => {
    return (
        <section className={style.experiencesMain}>
            <header className={style.sectionHeader}>
                <h4>EXPERIENCE</h4>
                <h2>WORK EXPERIENCE</h2>
            </header>
            <div className={style.sectionContent}>
                <Experience
                    title={"Front End Developer at Google Company"}
                    period={"2010 - 2020"}
                    exDescribe={"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.s"}
                />
                <Experience
                    title={"Front End Developer at Google Company"}
                    period={"2010 - 2020"}
                    exDescribe={"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.s"}
                />
                <Experience
                    title={"Front End Developer at Google Company"}
                    period={"2010 - 2020"}
                    exDescribe={"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.s"}
                />
                <Experience
                    title={"Front End Developer at Google Company"}
                    period={"2010 - 2020"}
                    exDescribe={"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.s"}
                />
            </div>
        </section>
    )
}