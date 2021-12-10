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


`

export const PageRegister = styled.div `

display: flex;
flex-direction: column;
position: relative;
align-items: start;
padding: 100px;

`