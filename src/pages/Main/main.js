import styled from "styled-components";
import * as colors from '../../config/Colors';


export const all = styled.div`
    width: 100%;
    height: 100vw;
    background-color: ${props => (props.mode ? colors.PrimaryDarkColor : colors.PrimaryWhiteColor)};

    .logo {
        position: absolute;
        top: 30px;
        left: 80px;
        width: 16rem;
        height: 15.5rem;
    }

    .svgDivision {
        position: absolute;
        top: 144px;
        left: 0;
        filter: drop-shadow(5px 0 5px ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1 )});
    }

    .svgDivision path {
        stroke: ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1)};
        stroke-width: .2;
        fill: none;
    }
`;

export const header = styled.section`
    height: 12rem;
    display: flex;

    &:nth-child(1) {
        margin-left: 26%;
    }

    .op {
        margin-top: 4.8rem;
        height: 6rem;
        padding-top: 1.5rem;
        margin-left: 3%;
        border-radius: 300px;
        border: ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1)} 5px solid;
    }
    .op:hover {
        box-shadow: 0 0 15px ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1)};
    }

    a {
        font-size: 20px;
        padding-top: 7rem;
        width: 230px;
        height: 100%;
        color: ${props => props.mode ? 'white' : 'black'};
        text-align: center;
        display: flex;
        justify-content: center;
    }
    
    a:hover {
        background-color: ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1)};
        box-shadow: 0 0 15px ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1)};
    }
`;

export const main = styled.section`
    width: 100%;
    height: 100%;


    .svgLines {
        position: absolute;
        min-width: 1800px;
        top: 130px;
        right: 158px;
        transition: right .3s;
        filter: drop-shadow(7px 0 7px white);

        @media screen and (max-width: 1550px){
        right: 0px;
        transition: right .3s;
    }
    }

    .svgLines path {
        stroke: rgba(255, 255, 255, 0.5);
        stroke-width: 0.05;
        fill: none;
        box-shadow: 0 0 100px white;
    }

    .svgHello {
        position: absolute;
        min-width: 1800px;
        top: 130px;
        left: -100px;
    }

    .svgHello path {
        stroke: ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1)};
        stroke-width: 0.05;
        fill: ${props => (props.mode ? colors.PrimaryColor_2 : colors.PrimaryColor_1)};
    }

`;

export const backFoto = styled.img`
    width: auto;
    height: 530px;
    right: 160px;
    position: absolute;
    top: 160px;
    display: -webkit-box;
    margin-left: auto;
    transition: right .3s;

    @media screen and (max-width: 1550px){
        right: 0;
        transition: right .3s;
    }
`;

export const title = styled.h1`
    position: absolute;
    top: 340px;
    z-index: 100;
    color: ${props => (props.mode ? colors.PrimaryWhiteColor : colors.PrimaryDarkColor)};;
    letter-spacing: 1.5px;
    font-size: 50px;
    left: 100px;
    font-family: 'Copperplate', fantasy;

    small {
        font-size: 25px;
        font-family: serif;
        letter-spacing: 0;
    }
`;


