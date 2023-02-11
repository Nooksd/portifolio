import React from "react";
import { HeaderS } from './header';
import whiteLogo from '../../../img/white_logo.png';
import blackLogo from '../../../img/black_logo.png';
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Link as A } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {

    const theme = useSelector(state => state.theme);

    return (
        <HeaderS className="header" id="hero">
            <Link to=''>
                <motion.img src={theme.mode === 'dark' ? whiteLogo : blackLogo} alt='' className="logo"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: .8 }}
                    whileTap={{ scale: .8 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}>
                </motion.img>
            </Link>
            <Link className="bt1" to='about' spy={true} smooth={true} duration={500} offset={-50}>Sobre mim</Link>
            <Link className="bt2" to="skills" spy={true} smooth={true} duration={500} offset={-50}>Meu conhecimento</Link>
            <Link className="bt3" to='' spy={true} smooth={true} duration={500} offset={-50}>Portifólio</Link>
            <A to='contato' className="op">Contate-me</A>
            <div>
                <svg viewBox="0 0 100 100" className="svgDivision">
                    <motion.path d="M 20 0 l 77 0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                </svg>
            </div>
        </HeaderS>
    );

}