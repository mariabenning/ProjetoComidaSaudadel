import React from "react";
import { BackgroundRegister, PageRegister } from "./styled";
import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form';
import axios from "axios";


const Register = () => {
  
useEffect (() => {
console.log("ou seu sou o cep")
}, [])


  const [cep, setCep] = useState([])

  const mudaCep = (event) => {
     setCep(event.target.value)
  }


  const ChecarCep = () => {

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
      //setCep(response.data)
      console.log(response.data)

      }).catch((error) => {
        console.log(error.response.data)
        //alert(error.response.data)
      })

  }











  return (


    <div>
      <BackgroundRegister />
      <PageRegister>
        <h1>Register</h1>

        {/* <input value={nome} onChange={mudaNome} placeholder="Nome" />
        <input value={date} onChange={mudaDate} type="date" placeholder="Nascimento" />
        <input value={cpf} onChange={mudaCpf} type="text" placeholder="Cpf" /> */}
        <input  value={cep}  onChange={mudaCep} type="text" placeholder="CEP" />  {mudaCep}
        <input type="text" placeholder="Logradouro" />
        <input type="text" placeholder="número" />
        <input type="text" placeholder="bairro" />
        <input type="text" placeholder="cidade" />
        <input type="text" placeholder="estado" />



        <button onClick={ChecarCep}>Registrar</button>

      </PageRegister>
    </div>


  );
}

export default Register;





