import styled from "styled-components";

export const HomeContainer = styled.div`
padding: 3rem;
width: 100%;
height: 100vh;
background: ${({theme})=>theme.COLORS.Yellow};
font-size: 1rem;
font-weight: 300;
`
export const CardContainer = styled.main`
background-color: ${({theme})=>theme.COLORS.White};
width: 400px;
margin: 0 auto;
border: 1px solid ${({theme})=>theme.COLORS.Black};
box-shadow: 7px 7px 0px 1px ${({theme})=>theme.COLORS.Black};
border-radius: 12px;
padding: 1rem;

img{
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
}
span{
    display: block;
    margin: 1rem 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme})=>theme.COLORS.Grey};
}
h1{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 900;
}
h1:hover{
color: ${({theme})=>theme.COLORS.Yellow};
}
p{
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme})=>theme.COLORS.Grey};
}
.avatar{
    width: 30px;
    margin-top: 1rem;
}
.wrapperAvatar{
    display: flex;
    align-items: center;
    gap: 10px;
}

`