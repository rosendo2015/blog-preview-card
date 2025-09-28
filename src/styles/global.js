import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    }
    
    body{
    display:flex; 
    height:97vh; 
    justify-content:center; 
    align-items:center; 
    
        font-family: "Figtree", sans-serif;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

`
