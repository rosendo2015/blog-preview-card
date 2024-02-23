import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    }
    
    body{
        font-family: "Figtree", sans-serif;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

`