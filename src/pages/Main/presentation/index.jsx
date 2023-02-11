import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as style from './presentation';
import backFoto from '../../../img/background.png';

export default function Presentation() {

    const [animate, setAnimate] = useState(true);
    const [isShown, setIsShown] = useState(false);

    return (
        <style.presentation>
            <svg viewBox="0 0 100 100" className="svgHello">
                <path d="M 40 14.1 l 1 -1 l 3 0 l 0 -3 l -8 0 l 0 3 l 3 0 l 1 1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
            </svg>
            <style.title>
                <span> João Victor Alves de Oliveira </span> <br />
                <motion.small whileHover={{ scale: 2 }}>
                    Um estudante de Web Develompent
                </motion.small>
            </style.title>
            <style.Bnt2>
                <a href="../../../img/curriculo.pdf" download><button>Baixar currículo</button></a>
                <button onClick={() => setIsShown(!isShown)}>Social Media</button>

                <AnimatePresence>

                    {isShown &&
                        <motion.div className="social-media" initial={{ height: 0 }} animate={{ height: '300px' }} transition={{ duration: .4 }} exit={{ height: 0 }}>
                            <a href="https://github.com/Nooksd" className="git" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>Nooksd/</span>
                            </a>
                            <a href="https://www.linkedin.com/in/joão-victor-alves-de-oliveira-936930260" className="link" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>João Victor Alves</span>
                            </a>
                            <a href="https://www.instagram.com/sd_nook/" className="insta" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                            </svg>
                            <span>@sd_nook</span>
                            </a>
                            <a href="https://twitter.com/NooKsd" className="twitter" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                            </svg>
                            <span>@Nooksd</span>
                            </a>
                        </motion.div>}

                </AnimatePresence>
            </style.Bnt2>
            <div className="img_and_svg">

                <style.backFoto src={backFoto} />
                <button onClick={() => setAnimate(!animate)} className='animate'></button>

                <AnimatePresence>
                    {animate ? (<svg viewBox="0 0 100 100" className="svgLines" key='lines'>
                        <motion.path key='1' d="M 78.3 10 l -5 -4 l 20 -2 l -4.4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                        <motion.path key='2' d="M 87.5 14 l 7 -1.5 l -12 14 l -8 -12 l 5.8 1.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                        <motion.path key='3' d="M 79.2 13.6 l -7 8 l 23 -4 l -6.8 -6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    </svg>) : (<svg viewBox="0 0 100 100" className="svgLines" key='lines'>
                        <motion.path key='1' d="M 78.3 10 l -5 -4 l 20 -2 l -4.4 3" initial={{ pathLength: 1 }} animate={{ pathLength: 0 }} transition={{ duration: 1 }} />
                        <motion.path key='2' d="M 87.5 14 l 7 -1.5 l -12 14 l -8 -12 l 5.8 1.4" initial={{ pathLength: 1 }} animate={{ pathLength: 0 }} transition={{ duration: 1 }} />
                        <motion.path key='3' d="M 79.2 13.6 l -7 8 l 23 -4 l -6.8 -6" initial={{ pathLength: 1 }} animate={{ pathLength: 0 }} transition={{ duration: 1 }} />
                    </svg>)}
                </AnimatePresence>
            </div>
            <svg viewBox="0 0 100 100">

            </svg>
        </style.presentation>
    );
}