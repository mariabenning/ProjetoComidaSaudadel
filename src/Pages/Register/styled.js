import bloco_final_image from "../../img/bloco_final_image.svg"
import styled from "styled-components"




export const BackgroundRegister =  styled.div `
background-image: url(${bloco_final_image});
width: 55vw; 
height: 100vh;
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

export const PageRegister = styled.h1 `
display: flex;
font-size: 20px;
padding-top: 100px;
padding-left: 15%;
`



export const InputRegister = styled.div `

display: flex;
Flex-direction: column;
width: 50%;
align-items: center;

`


export const ButtonRegister = styled.button `

width: 50%;
border: none;
background: green;
padding: 5px;
margin: 5px;
color: white;

`


export const ButtonVoltar = styled.button `
width: 50%;
border: none;
background: white;
padding: 5px;
margin: 5px
color: greem;


`