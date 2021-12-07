
import styled, { createGlobalStyle } from 'styled-components';




 const GlobalStyle = createGlobalStyle`
*{  margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

}

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
   
  }

  body, input, button {
  font: 16px "Poppins", sans-serif;
  }


  button {
    cursor: pointer;
  }

`;
 export default GlobalStyle;



 export const Header = styled.div `
display: flex;

`
 

export const Menu = styled.button `
display: flex;


`

export const ContainerPrincipal = styled.div `


`



