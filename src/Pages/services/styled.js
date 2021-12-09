import bloco_services from "../../img/bloco_services.svg";
import styled from "styled-components";




export const BackgroundServices = styled.div `
width: 55vw; 
height: 100vh;
background-image: url(${bloco_services});
background-size: cover;
background-repeat: no-repeat;
position: absolute; 
left: 0px;
`


export const TextServices = styled.div `
display: flex;
width: 50vw; 
height: 50vh;
flex-wrap: wrap;
position: absolute;
right: 0px;
padding-top: 100px;
padding-right: 10vw;
`