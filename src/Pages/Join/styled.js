import bloco_final_image from "../../img/bloco_final_image.svg"
import styled from "styled-components"




export const BackgroundJoin =  styled.div `
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

export const TextJoin = styled.h1`
display: flex;
width: 30vw;
font-size: 3vh;
padding-top: 50vh;
margin-left: 80px;

@media (min-device-width: 320px) and (max-device-width: 480px) {
display: flex;
width: 30vw;
font-size: 3vh;
padding-top: 50vh;
margin-left: 80px;
};

@media (min-device-width: 481px) and (max-device-width: 800px) {
display: flex;
width: 30vw;
font-size: 3vh;
padding-top: 50vh;
margin-left: 80px;
    
}


`


export const InputEmail = styled.div `
display: flex;
margin-left: 80px;

@media (min-device-width: 320px) and (max-device-width: 480px) {
display: flex;
width: 30vw;
font-size: 3vh;
width: 30vw;
font-size: 3vh;
padding-top: 5vh;
margin-left: 80px;

@media (min-device-width: 481px) and (max-device-width: 800px) {
display: flex;
width: 30vw;
font-size: 3vh;
width: 30vw;
font-size: 3vh;
padding-top: 5vh;
margin-left: 80px;

}};`





export const  ButtonJoin = styled.button `

border: none;
background: green;
padding: 5px;
margin: 1px;
color: white;

`


