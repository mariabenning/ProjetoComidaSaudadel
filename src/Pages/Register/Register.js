import React from "react";
import { BackgroundRegister, PageRegister } from "./styled";
import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form';
import axios from "axios";


const Register = () => {
  const [nome, setNome] = useState([])
  const [date, setDate] = useState([])
  const [cpf, setCpf] = useState([])
  const [cep, setCep] = useState([])
  const [logradouro, setlogradouro] = useState([])
  const [numero, setNumero] = useState([])
  const [bairro, setBairro] = useState([])
  const [estado, setEstado] = useState([])
  const [cidade, setCidade] = useState([])


  const mudaCep = (event) => {
    setCep(event.target.value)
  }

  const mudaNome = (event) => {
    setNome(event.target.value)
  }

  const mudaDate = (event) => {
    setDate(event.target.value)
  }

  const mudaCpf = (event) => {
    setCpf(event.target.value)
  }


  const mudaNumero = (event) => {
    setNumero(event.target.value)
  }


  const mudaLogradouro= (response) => {
    setlogradouro(response.data.logradouro)
  }


  

  const mudaBairro = (response) => {
    setBairro(response.data.bairro)
  }

  const mudaCidade = (response) => {
    setCidade(response.data.localidade)
  }

  const mudaEstado = (response) => {
    setEstado(response.data.uf)
  }


  const ChecarCep = () => {

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setlogradouro(response.data.logradouro)
        setCidade(response.data.localidade)
        setEstado(response.data.uf)
        setBairro(response.data.bairro)
        
        
      }).catch((error) => {
        console.log(error.response.data)

      })
      }

  return (


    <div>
      <BackgroundRegister />
      <PageRegister>
        <h1>Register</h1>

        <input value={nome} onChange={mudaNome} placeholder="Nome" />
        <input value={date} onChange={mudaDate} type="date" placeholder="Nascimento" />
        <input value={cpf} onChange={mudaCpf} type="text" placeholder="Cpf" />
        <input value={numero} onChange={mudaNumero}type="number" placeholder="número" /> 
        <input value={cep} onChange={mudaCep} type="text" placeholder="CEP" />  
        <input value={logradouro} onChange={mudaLogradouro} type="text" placeholder="Logradouro" /> 
        <input value={bairro} onChange={mudaBairro}type="text" placeholder="bairro" /> 
        <input value={cidade} onChange={mudaCidade}type="text" placeholder="cidade" /> 
        <input value={estado} onChange={mudaEstado}type="text" placeholder="estado" /> 



        <button onClick={ChecarCep}>Registrar</button>

      </PageRegister>
    </div>


  );
}

export default Register;





