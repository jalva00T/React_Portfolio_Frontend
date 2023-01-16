// import React from 'react'
import "./topbar.scss"
import { Person, Mail, Instagram } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    {/* <a href="#about" className="logotext">JMA</a> */}
                    <a href="#about" className="logo">
                        <img className="midilogo" src="/assets/logo/logo.png" alt=""/>
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>XXX-XXX-XXXX</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>mididatatulsa@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <Instagram className="icon" />
                        <a href="https://www.instagram.com/jake_m_alvarez/" target="_blank" rel="noreferrer" className="insta">instagram.com/jake_m_alvarez</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
