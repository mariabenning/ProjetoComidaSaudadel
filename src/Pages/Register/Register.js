import React from "react";
import { BackgroundRegister, PageRegister } from "./styled";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";


const Register = () => {
  

  const [cep, setCep] = useState([])

  const mudaCep = (event) => {
     setCep(event.target.value)
  }


  const ChecarCep = () => {

    axios.get("https://viacep.com.br/ws/01001000/json/")
      .then((response) => {
        setCep(response)
      //console.log(response.data.cep)

      }).catch((error) => {
        console.log(error.response.data)
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
        <input  value={cep}  onChange={mudaCep} type="text" placeholder="CEP" />
        <input type="text" placeholder="Logradouro" /> {mudaCep}
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





