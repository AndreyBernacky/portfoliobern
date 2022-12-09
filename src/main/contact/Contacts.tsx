import React from "react";
import style from "./Contacts.module.css";


export const Contacts = () => {
    return (
        <section className={style.contactsMain}>
            <header className={style.sectionHeader}>
                <h4>GET IN TOUCH</h4>
                <h2>CONTACT</h2>
            </header>
            <div className={style.contactsContent}>
                <div className={style.contactsTxt}>
                    <p><span>Telegram:</span> <a href="https://telegram.me/andreyBern">write me</a></p>
                    <p><span>Email:</span> <a href="mailto:email@email.me">email@email.me</a></p>
                    <p><span>Phone:</span> <a href="tel://+999 99 999 99 99">+999 99 999 99 99</a></p>
                </div>
                <div className={style.contactsForm}>
                    <form>
                        <div><input type="text" className={style.inputText} placeholder="Name"/></div>
                        <div><input type="email" className={style.inputText} placeholder="Email"/></div>
                        <div><textarea className={`${style.inputText} ${style.textArea}`} cols={30} rows={7} placeholder="Message"></textarea></div>
                        <div><input type="submit" className={style.btn} value="Send Message"/></div>
                    </form>
                </div>
            </div>
        </section>
    )
}