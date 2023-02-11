import styled from "styled-components";

export const presentation = styled.section`

    width: 100%;
    height: 56rem;


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
        width: 1400px;
        top: 130px;
        left: -100px;
    }

    .svgHello path {
        stroke: ${props => props.theme.primaryColor};
        stroke-width: 0.05;
        fill: ${props => props.theme.primaryColor};
    }

    .animate {
        position: absolute;
        opacity: 0;
        top: 160px;
        right: 160px;
        width: 859px;
        height: 530px;
        z-index: 200;

        @media screen and (max-width: 1550px){
        right: 0;
        transition: right .3s;
    }
    }
`;

export const backFoto = styled.img`

    &::before {
        content: '< img >';
        position: absolute;
        top: 0;
        left: 0;
        color: ${props => props.theme.textColor};
    }

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
    color: ${props => (props => props.theme.primaryColor)};;
    letter-spacing: 1.5px;
    font-size: 50px;
    left: 70px;
    font-family: 'Copperplate', fantasy;

    span::after {
        content: ' </ h1 >';
        font-family: 'Pinyon Script', sans-serif;
        font-size: 18px;
        width: 100px;
        color: ${props => props.theme.textColor};
        opacity: .5;
        position: absolute;
        top: 42px;
        left: 610px;
    }

    span::before {
        content: ' < h1 > ';
        font-family: 'Pinyon Script', sans-serif;
        font-size: 18px;
        color: ${props => props.theme.textColor};
        opacity: .5;
        position: absolute;
        left: -38px;
        top: -10px;
    }

    small {
        font-size: 25px;
        font-family: serif;
        letter-spacing: 0;
    }

    small::after {
        content: ' </ P >';
        font-family: 'Pinyon Script', sans-serif;
        font-size: 18px;
        color: ${props => props.theme.textColor};
        opacity: .5;
        position: absolute;
        top: 105px;
        left: 370px;
    }

    small::before {
        content: ' < P >  ';
        font-family: 'Pinyon Script', sans-serif;
        font-size: 18px;
        color: ${props => props.theme.textColor};
        opacity: .5;
        position: absolute;
        left: -28px;
        top: 76px;
    }
`;

export const Bnt2 = styled.div`
        button {
            position: absolute;
            top: 45rem;
            left: 25rem;
            width: 13rem;
            height: 5rem;
            background-color: ${props => props.theme.primaryColor};
            border-radius: 13px;
            color: ${props => props.theme.textColor};
            font-size: 15px;
            font-weight: 300;
            cursor: pointer;
            z-index: 201;
        }

        button:hover {
            box-shadow: 0 0 15px ${props => props.theme.primaryColor};
        }

        button:nth-child(2) {
            left: 40rem;
            background-color: ${props => props.theme.secundaryBackColor};
            border: 2px solid ${props => props.theme.textColor};
        }

        button:nth-child(2):hover {
            box-shadow: 0 0 15px ${props => props.theme.textColor};
        }

        .social-media {
            width: 150px;
            height: 300px;
            position: absolute;
            left: 42.25rem;
            top: 50rem;
            z-index: 203;
            overflow: hidden;
        }

        .social-media svg {
            position: relative;
            width: 4rem;
            left: 0;
            height: 40px;
            fill: ${props => props.theme.primaryColor};
            cursor: pointer;
        }
        .social-media a{
            position: absolute;
            display: flex;
            color: ${props => props.theme.textColor};
        }
        .social-media a span {
            margin-top: 12.5px;
            margin-left: 5px;
        }

        .git {
            top: 10px;
        }
        .link {
            top: 80px;
        }
        .insta {
            top: 160px;
        }
        .twitter {
            top: 230px;
        }
       
`;