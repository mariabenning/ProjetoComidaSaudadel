
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
 img {
max-width: 100%;



}
button {
    cursor: pointer;
  }

 

  

  
a {
  text-decoration: none;
}`;
export default GlobalStyle;








export const BackgroundHome = styled.div`
width: 55vw; 
height: 100vh;
background-image: url(${Illustration});
background-size: cover;
background-repeat: no-repeat;
position: absolute; 
right: 0px;

}
`

// @media(min-width:320px) {
//   display: none;
  
// }




export const Header = styled.div`
display: flex;
flex-wrap: wrap;
margin: 2px;

padding: 20px;
padding-left: 10%;
font-size: 1vw;
color:LimeGreen;
position: absolute; 
/* :hover {
      background: #795a8b;
       */
`

export const NavMenu = styled.li`
display: flex;
flex-wrap: wrap;
padding: 20px;
padding-left: 50px;
justify-content: normal;
border: none;
cursor:pointer;
font-size: 1vw;
color: white;

`


export const TextHome = styled.h2`
width:30%;
font-size: 2vw;
padding-left: 10%;
padding-top: 20%;
`

export const ImgLupa = styled.img `


width: 30px;
height: 28px;
align-items: center;

`



export const InputHome= styled.input `
width:230px;
height: 40px;
margin-top: 20px;
align-items: center;
`








