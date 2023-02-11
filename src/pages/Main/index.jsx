/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as style from './main';
import Header from "./header";
import Presentation from "./presentation";
import About from "./about";
import { Link } from "react-scroll";
import Skills from "./skills";

export default function Main() {

    return (
        <style.all>
            <Header />
            <Presentation />
            <About />
            <Skills />
            <svg viewBox="0 0 100 100" className="top-bnt">
                <Link to="hero" spy={true} smooth={true} duration={500} offset={-50}>
                    <path d="M 90 3 q 0.1 -1 1 -1 T 92 3 l 0 1.5 q -0.1 1 -1 1 T 90 4.5 l 0 -1.5" />
                    <path d="M 91 4.5 l 0 -1.5 l .4 .4 l -.4 -.45 l -.4 .4" />
                </Link>
            </svg>
        </style.all>
    );
};