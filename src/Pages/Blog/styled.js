import styled from "styled-components"

export const  TitleBlog = styled.h1`
margin: 40px;
justify-content: center;
display:flex;
flex-wrap: wrap;
font-size: 1vw;

@media (min-device-width: 320px) and (max-device-width: 480px) {
font-size: 3vw;
  
};

@media (min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 3vw;

}

`

export const  TextBlog = styled.p`
margin: 40px;
justify-content: center;
display:flex;
flex-wrap: wrap;
font-size: 1vw;
text-align:center;


@media (min-device-width: 320px) and (max-device-width: 480px) {
font-size: 3vw;
  
};

@media (min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 3vw;

`


export const CardBLog = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 15px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    width: 340px;
    height: 420px auto;
    justify-content: left;
    text-decoration: none;


`
export const CardImg = styled.img`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`


export const CardContainer = styled.div `

display: flex;
align-items: center;
justify-content: center;
overflow-x: scroll;
white-space: break-spaces;
`