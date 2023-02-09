/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import * as style from './main';
import whiteLogo from '../../img/white_logo.png';
import blackLogo from '../../img/black_logo.png';
import backFoto from '../../img/background.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function Main() {
    const [mode, setMode] = useState(true);
    const [animate, setAnimate] = useState(false);

    return (

        <style.all mode={mode}>
            <style.header className="header" mode={mode}>
                <motion.img src={mode ? whiteLogo : blackLogo} alt='' className="logo" whileHover={{ rotate: 360 }} transition={{ duration: .8 }} whileTap={{ scale: .8 }} initial={{ scale: 0 }} animate={{ scale: 1 }}></motion.img>
                <motion.a href="#">Sobre mim</motion.a>
                <a href="#">Serviços prestados</a>
                <a href="#">Portifólio</a>
                <a href="#" className="op">Contate-me</a>
            </style.header>
            <div mode={mode}>
                <svg viewBox="0 0 100 100" className="svgDivision">
                    <motion.path d="M 17 0 l 80 0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                </svg>
            </div>
            <style.main className='container' mode={mode}>
                <svg viewBox="0 0 100 100" className="svgHello">
                    <path d="M 30 11 l 1 -1 l 2.5 0 l 0 -2.5 l -7 0 l 0 2.5 l 2.5 0 l 1 1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                </svg>
                <style.title mode={mode}>
                    João Victor Alves de Oliveira <br />
                    <small>
                        Um estudante de Web Develompent
                    </small>
                </style.title>
                <div className="img_and_svg">
                    <style.backFoto src={backFoto} />

                    <svg viewBox="0 0 100 100" className="svgLines" key='lines'>
                        <motion.path key='1' d="M 78.3 10 l -5 -4 l 20 -2 l -4.4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                        <motion.path key='2' d="M 87.5 14 l 7 -1.5 l -12 14 l -8 -12 l 5.8 1.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                        <motion.path key='3' d="M 79.2 13.6 l -7 8 l 23 -4 l -6.8 -6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    </svg>
                </div>
            </style.main>
            <button onClick={() => setMode(!mode)}>Mudar modo</button>
        </style.all>
    );
};