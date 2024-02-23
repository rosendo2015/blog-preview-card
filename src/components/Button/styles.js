import styled from "styled-components";
export const Container = styled.button`

border: 0;
background-color: ${({theme})=>theme.COLORS.Yellow};
color: ${({theme})=>theme.COLORS.Black};
padding: 0.5rem 1rem;
border-radius: 5px;
cursor: pointer;
font-weight: 900;

&:hover{
    
}
`