import React from 'react';
import style from './App.module.css';
import {Sidebar} from "./sidebar/Sidebar";
import {Header} from "./main/header/Header";
import {About} from "./main/about/About";
import {Skills} from "./main/skills/Skills";
import {Experiences} from "./main/experiences/Experiences";
import {Works} from "./main/works/Works";
import {Contacts} from "./main/contact/Contacts";

function App() {
    return (
        <div className={style.App}>
            <div className={style.wrapperMain}>
                <Sidebar/>
                <main>
                    <Header/>
                    <About/>
                    <Skills/>
                    <Experiences/>
                    <Works/>
                    <Contacts/>
                </main>
            </div>
        </div>
    );
}

export default App;
