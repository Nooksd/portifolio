import styled from 'styled-components'

export const HeaderS = styled.section`
    height: 12rem;
    display: flex;
    
    .logo {
        position: absolute;
        z-index: 100;
        top: 30px;
        left: 80px;
        width: 16rem;
        height: 15.5rem;
    }

    &::after {
        position: absolute;
        top: 7px;
        left: 20px;
        color: ${props => props.theme.textColor};
        content: '</ header >';
        font-family: 'Pinyon Script', sans-serif;
        opacity: .5;
        font-size: 18px;
    }

    &::before {
        position: absolute;
        top: 38px;
        left: 38px;
        color: ${props => props.theme.textColor};
        content: '< body >';
        font-family: 'Pinyon Script', sans-serif;
        opacity: .5;
        font-size: 18px;
    }
    
    &:nth-child(1) {
        margin-left: 26%;
    }

    .op {
        font-size: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-top: 4.8rem;
        height: 6rem;
        padding-top: 1.5rem;
        width: 230px;
        color: ${props => props.theme.textColor};
        margin-left: 3%;
        border-radius: 300px;
        border: ${props => props.theme.primaryColor} 5px solid;
    }
    .op:hover {
        background-color: ${props => props.theme.primaryColor};
        box-shadow: 0 0 15px ${props => props.theme.primaryColor};
    }

    & a:not(:first-child, :nth-child(5)) {
        font-size: 20px;
        padding-top: 7rem;
        width: 230px;
        color: ${props => props.theme.textColor};
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .bt3::before,
    .bt2::before,
    .bt1::before {
        content: "";
        position: absolute;
        top: 12rem;
        height: 12rem;
        width: 230px;
        background-color: ${props => props.theme.primaryColor};
        box-shadow: 0 0 15px ${props => props.theme.primaryColor};
        transition: transform .35s;
        transform-origin: 0 0;
        transition-timing-function: cubic-bezier(.5,1.6,.4,.7);
        z-index: -1;
    }
    .bt3::before,
    .bt2::before,
    .bt1::before {
        transform: scaleY(0);
    }
    .bt3:hover::before,
    .bt2:hover::before,
    .bt1:hover::before {
        transform: scaleY(-1);
    }
    
    a:hover:not(:first-child) {
        /* background-color: ${props => props.theme.primaryColor};
        box-shadow: 0 0 15px ${props => props.theme.primaryColor}; */
        cursor: pointer;
        z-index: 100;
    }

    .svgDivision {
        position: absolute;
        top: 144px;
        left: 0;
        filter: drop-shadow(5px 0 5px ${props => props.theme.primaryColor});
    }

    .svgDivision path {
        stroke: ${props => props.theme.primaryColor};
        stroke-width: .2;
        fill: none;
    }
`;