import React from 'react';
import style from './Sidebar.module.css';
import andrey from '../img/andrey.jpg';
import andrey2x from '../img/andrey@2x.jpg';
import {isRetina} from "../plugin/retina";
import {Navigation} from "./nav/Navigation";
import {Socnet} from "./socnet/Socnet";

export const Sidebar = () => {
    return (
        <div className={style.sideWrap}>
            <img src={isRetina(andrey, andrey2x)} alt="Andrey Bernatskiy" className={style.logo}/>
            <h3>Andrey Bernatskiy</h3>
            <h4>Front-end Developer</h4>
            <Socnet/>
            <Navigation/>
        </div>
    );
}