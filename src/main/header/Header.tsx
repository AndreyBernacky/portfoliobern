import React from "react";
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.headerMain}>
            <div className={style.headerContent}>
                <h1>Hi!<br/>
                    I'm Andrey</h1>
                <p>Front-end Developer From Belarus</p>
                <a href="#" className={style.btmThin}>View Portfolio </a>
            </div>
        </header>
    )
}