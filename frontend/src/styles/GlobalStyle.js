import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    :root{
        --primary-color: color: rgba(34,34,96,1);
        --primary-color2: 'color: #222260';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }
    body{
        
        font-family: "Nunito", sans-serif;
        background-color: white;
        font-size: clamp(1rem, 2vw, 1.2rem);
        overflow: hidden;
        color: rgba(34,34,96,.6);
    }
`;