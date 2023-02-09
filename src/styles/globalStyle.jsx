import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/Colors';

export default createGlobalStyle`
    * {margin: 0; padding: 0; border: 0; box-sizing: border-box; text-decoration: none};

    body {
        background-color: ${colors.PrimaryDarkColor};
        font-family: serif;
    }

    .container {
        max-width: 1500px;
        margin: 0 auto;
        font-weight: 600;
    } 
`;