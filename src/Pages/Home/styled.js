
import styled, { createGlobalStyle } from 'styled-components';
import Illustration from "../../img/Illustration.svg";

 const GlobalStyle = createGlobalStyle`
*{  margin: 0;
    padding: 0;
    outline: 0;
    margin-left:0;
    margin-top:0;
    list-style: none;
    box-sizing: border-box;
  }
input, button, li, ul, p {
font: 16px "Poppins", sans-serif;
}

button {
    cursor: pointer;
  }

a {
  text-decoration: none;
}`;
export default GlobalStyle;

export const BackgroundHome = styled.div `
width: 55vw; 
height: 100vh;
background-image: url(${Illustration});
background-size: cover;
background-repeat: no-repeat;
position: absolute; 
right: 0px;
`



export const Header = styled.div `
display: flex;
margin: 2px;
padding: 20px;
padding-left: 40px;

`

export const NavMenu = styled.li `
display: flex;
flex-wrap: wrap;
padding: 20px;
justify-content: space-around;

`


export const TextHome = styled.div `
padding: 45px;
padding-top: 50vh;
`














