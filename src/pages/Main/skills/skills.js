import styled from "styled-components";

export const skills = styled.section`
    height: 70rem;
    background-color: ${props => props.theme.secundaryBackColor};

    
.curve {
    position: absolute;
    top: 138rem;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.curve svg {
    position: relative;
    display: block;
    width: calc(156% + 1.3px);
    height: 106px;
    transform: rotateY(180deg);
}

.curve .curve-fill {
    fill:${props => props.theme.backColor};
}

`;