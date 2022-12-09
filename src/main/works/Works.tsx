import React from "react";
import style from "./Works.module.css";
import {Work} from "./work/Work";
import work1 from "../../img/work1.png"

export type WorkPropsType = {
    workImg:string,
    workTitle:string,
    workDescribe:string
}

export const Works = () => {
    return (
        <section className={style.worksMain}>
            <header className={style.sectionHeader}>
                <h4>MY WORK</h4>
                <h2>RECENT WORK</h2>
            </header>
            <div className={style.workContent}>
                <Work
                    workImg={work1}
                    workTitle={"ToDo List With Redux"}
                    workDescribe={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem"}
                />
                <Work
                    workImg={work1}
                    workTitle={"ToDo List With Redux"}
                    workDescribe={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem"}
                />
                <Work
                    workImg={work1}
                    workTitle={"ToDo List With Redux"}
                    workDescribe={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem"}
                />
                <Work
                    workImg={work1}
                    workTitle={"ToDo List With Redux"}
                    workDescribe={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut error illum inventore voluptatem"}
                />
            </div>
        </section>
    )
}