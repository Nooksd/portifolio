import styled from "styled-components";

export const AboutS = styled.section`
    background-color: ${props => props.theme.backColor};
    height: 70rem;

    .themeMode {
        position: fixed;
        top: 75rem;
        right: 4.5rem;
        height: 34px;
        width: 34px;
        background-color: rgba(0, 0, 0, 0);
        z-index: 300;
        cursor: pointer;
    }

    .themeMode path {
        stroke: ${props => props.theme.primaryColor};
        fill: ${props => props.theme.primaryColor};
    }
    .themeMode svg {
        width: 100%;
    }

.curve {
position: absolute;
top: 68rem;
left: 0;
width: 100%;
overflow: hidden;
line-height: 0;
}

.curve svg {
    position: relative;
    display: block;
    width: calc(122% + 1.3px);
    height: 161px;
}

.curve .curve-fill {
    fill: ${props => props.theme.secundaryBackColor};
}

&::before {
    content: "< section >";
    position: absolute;
    top: 68rem;
    left: 38px;
    color: ${props => props.theme.textColor};
    z-index: 1;
    font-family: 'Pinyon Script', sans-serif;
    font-size: 20px;
    opacity: .5;
}
&::after {
    content: "</ section >";
    position: absolute;
    top: 146rem;
    left: 38px;
    color: ${props => props.theme.textColor};
    z-index: 1;
    font-family: 'Pinyon Script', sans-serif;
    font-size: 20px;
    opacity: .5;
}
`;