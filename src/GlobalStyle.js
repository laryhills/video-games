import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    
    //creating css variables
    :root{ 
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontXLarge: 2.5rem;
        --fontLarge: 1.5rem;
        --fontMedium: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: "Cuprum", sans-serif; 
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }
        h2 {
            font-size: 1rem;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }

    
    .container {
        display: flex;
        flex-direction: row;
        color: #c1d1e8;
        background-image: linear-gradient(#081221, #03080f);
        height: 100%;
        width: 100%;
        padding: 10px;
    }

`;
