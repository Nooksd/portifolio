import styled from "styled-components";

export const all = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.secundaryBackColor};

    .top-bnt {
        position: fixed;
        width: 155.3rem;
        right: -8rem;
        top: 65rem;
        
    }
    .top-bnt path {
        stroke: ${props => props.theme.primaryColor};
        stroke-width: .15;
        fill: rgba(0, 0, 0, 0);
        cursor: pointer;
    }


`;
