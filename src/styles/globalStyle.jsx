import { createGlobalStyle } from 'styled-components';
import { PrimaryBrightColor, PrimaryDarkColor, secundaryBrightColor, secundaryDarkColor } from '../config/Colors';

export default createGlobalStyle`
    * {margin: 0; padding: 0; border: 0; box-sizing: border-box};

    body {
        background-color: ${PrimaryDarkColor};
        color: ${PrimaryBrightColor};
    }

`;