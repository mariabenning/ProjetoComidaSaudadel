
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


body {
  background-color: Gainsboro;
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
@media (min-device-width: 320px) and (max-device-width: 480px) {
  display: none;
  
  };

@media (min-device-width: 481px) and (max-device-width: 800px) {
display: none;

}
`






export const Header = styled.div`
display: flex;
flex-wrap: wrap;
margin: 2px;
padding: 20px;
padding-left: 10%;
font-size: 1vw;
color:LimeGreen;
position: absolute; 
@media (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 3vw;

};

@media (min-device-width: 481px) and (max-device-width: 800px) {

font-size: 3vw;
}`

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
@media (min-device-width: 320px) and (max-device-width: 480px) {
  display: none;
  };

  @media (min-device-width: 481px) and (max-device-width: 800px) {
  display: none;
  };
}


`


export const TextHome = styled.h2`
width:30%;
font-size: 2vw;
padding-left: 10%;
padding-top: 20%;
@media (min-device-width: 320px) and (max-device-width: 480px) {
  
  font-size: 8vw;
  padding-top: 15vh;

  };


  @media (min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 5vw;
    padding-top: 15vh;
  };
`






export const InputHome = styled.input`
width:230px;
height: 40px;
margin-top: 20px;
align-items: center;
@media (min-device-width: 320px) and (max-device-width: 480px) {

width: 70vw;
height: 5vh;
margin: 50% auto;
};

  @media(min-device-width: 481px) and (max-device-width: 800px) {
    width: 80vw;
    height: 5vh;
    margin: 50% auto;
}
`



 export const  SeachButton = styled.button `
 border: none;
 color: white;
 height: 40px;
 width:30px;
 Background: green;
 margin: 1px;


 @media (min-device-width: 320px) and (max-device-width: 480px) {
 display: none;
  };

  @media(min-device-width: 481px) and (max-device-width: 800px) {
    display: none;
}



 `













