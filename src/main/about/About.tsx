import React from "react";
import style from './About.module.css'

export const About = () => {
    return (
        <section className={style.aboutMain}>
            <header className={style.sectionHeader}>
                <h4>About me</h4>
                <h2>Who am I?</h2>
            </header>
            <div className={style.sectionContent}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto aspernatur atque blanditiis culpa cum dicta est,
                    eveniet ipsam laudantium magni, maiores molestiae nihil,
                    qui quidem quisquam quo repudiandae temporibus voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto aspernatur atque blanditiis culpa cum dicta est,
                    eveniet ipsam laudantium magni, maiores molestiae nihil,
                    qui quidem quisquam quo repudiandae temporibus voluptatibus.</p>
            </div>
        </section>
    )
}