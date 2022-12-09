import React from "react";
import style from "./Work.module.css";
import {WorkPropsType} from "../Works";

export const Work = (props:WorkPropsType) => {
    return (
        <article className={style.workItem}>
            <div className={style.workImg}>
                <img src={props.workImg}/>
            </div>
            <div className={style.workLabel}>
                <h2 className={style.workTitle}>{props.workTitle}</h2>
                <p>{props.workDescribe}</p>
            </div>
        </article>
    )
}