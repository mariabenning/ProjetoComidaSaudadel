
import styled, { createGlobalStyle } from 'styled-components';

import Illustration from "../../img/Illustration.svg";


 const GlobalStyle = createGlobalStyle`
*{  margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    box-sizing: border-box;

    
}

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased;
    
  }

  body, input, button, li, ul, p {
  font: 16px "Poppins", sans-serif;
  }


  button {
    cursor: pointer;
  }


`;



 export default GlobalStyle;



export const Header = styled.div `
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
padding: 20px;






`


export const NavMenu = styled.li `
display: flex;
justify-content: space-around;
padding: 10px;


`
 




export const HomePage = styled.div `
 
 height: 800px;
 width: 800px;
 background-image: url(${Illustration});
 background-repeat: no-repeat;
 
`

export const TextPage = styled.h1`
display: flex;
margin-left: 30px;

`

export const InputHome = styled.input`




`

export const ImgHome = styled.img`




`


