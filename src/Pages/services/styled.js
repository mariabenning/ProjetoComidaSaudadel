import bloco_services from "../../img/bloco_services.svg";
import styled from "styled-components";




export const BackgroundServices = styled.div `
display: flex;
width: 55vw; 
height: 100vh;
background-image: url(${bloco_services});
background-size: cover;
background-repeat: no-repeat;
position: absolute; 
left: 0px;

@media (min-device-width: 320px) and (max-device-width: 480px) {
 display: none;
  };

  @media(min-device-width: 481px) and (max-device-width: 800px) {
    display: none;
}




`




export const TitleKnowMore= styled.h1 `
font-size: 1vw; 
padding-left: 40%;
right: 30%;
width:90%;
padding-top: 10%; 
margin: 10px;
display: flex;
justify-content: center;

@media (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 2vw; 
  };

  @media(min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 2vw; 
}




`

export const TextServices = styled.p `
font-size: 1vw; 
padding-left: 50%;
right: 30%;
width:80%;
padding-top: 5%; 
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 

@media (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 3vw; 
    
  };

  @media(min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 3vw; 
}



`


export const  KnowMoreButton = styled.button `
 border: none;
 color: white;
 height: 50px;
 width:100px;
 Background: green;
 margin: 10px; `
 
 