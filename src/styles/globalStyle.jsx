import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {margin: 0; padding: 0; border: 0; box-sizing: border-box; text-decoration: none};

    body {
        font-family: serif;
        background-color: ${props => props.theme.backColor};
    }

    .container {
        max-width: 1500px;
        margin: 0 auto;
        font-weight: 600;
    } 

    ::-webkit-scrollbar {
        width: .8em;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.backColor};;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.primaryColor};
        border-radius: 50px;
    }

`;