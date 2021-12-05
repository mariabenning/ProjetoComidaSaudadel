
import React from 'react'
import styled from "styled-components";
import Illutration from '../../img/Illustration.svg';



export const imagenHome = styled.img
 `
 width: 100%;
 height: 100%;

 `



const botaoReceitas = () => {
    console.log("apertou botão de receitas")


}


const botaoBlog = () => {

    console.log("apertou botão de blog")
    
}

const botaoJuntese = () => {

    console.log("apertou botão juntese")
    
}

const botaoRegistrar= () => {
    console.log("apertou botão de registre")

    
}

export default function Home() {
    return (
        <div>

            <h1>Comida Saudável</h1>

            
            <button onClick={botaoReceitas}>RECEITAS SAUDÁVEIS</button>
            <button onClick={botaoBlog}>BLOG</button>
            <button onClick={botaoJuntese}>JUNTE-SE</button>
            <button onClick={botaoRegistrar}>REGISTRAR</button>

            <h2>Pronto para Tentar uma nova receita?</h2>
            <input placeholder="Pesquise receitas saudáveis"></input>
             <img src={Illutration} ></img> 
        </div>
    );
}

