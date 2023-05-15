import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }:root{
        @media (max-width: 1305px) {
            font-size: 87%;   
        }

        @media (max-width: 1068px) {
            font-size: 70%;
        }

        @media (max-width: 880px) {
            font-size: 50%;
        }
        @media (max-width: 640px) {
            font-size: 40%;
        }
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
    body{
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
