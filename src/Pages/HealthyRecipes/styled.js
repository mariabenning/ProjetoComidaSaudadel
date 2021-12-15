import styled from "styled-components"


export const TitleRecipes= styled.h1`
margin: 50px;
justify-content: center;
display:flex;
flex-wrap: wrap;
font-size: 2vw;
@media (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 4vh;
  
};

@media (min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 5vh;
    
}



`

export const TextHecipes= styled.h2`
padding:5px;
justify-content: center;
display:flex;
flex-wrap: wrap;
font-size: 1vw;
text-align: center;

@media (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 2vh;
  
};

@media (min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 3vh;
    
}

`

export const TextPrincipal = styled.div `
margin: 80px;
padding: 100px 0;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
@media (min-device-width: 320px) and (max-device-width: 480px) {
    
  
};

@media (min-device-width: 481px) and (max-device-width: 800px) {

    
}
`




export const TextCard = styled.p `

background-color: white;
display: flex;
flex-direction: column;
align-items: center;
font-size: 20px;
word-break: break-word;
padding: 50px auto;
padding-top: 70px;


`






export const CardComida = styled.div `
display: flex;
flex-wrap: wrap;
margin: 10px;

`





export const ButtonCard = styled.button `
border: none;
background: green;
padding: 5px;
margin: 1px;
color: white;


`








