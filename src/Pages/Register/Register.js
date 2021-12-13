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


  const mudaLogradouro = (response) => {
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


  const ChecarCep = (event) => {
    event.preventDefault()

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setlogradouro(response.data.logradouro)
        setCidade(response.data.localidade)
        setEstado(response.data.uf)
        setBairro(response.data.bairro)

      }).catch((error) => {
        alert(error.response.message)

      })
  }

  return (


    <div>
      <BackgroundRegister />
      <PageRegister>
        <h1>Register</h1>


        <form onSubmit={ChecarCep}>


          <input value={nome}
            onChange={mudaNome}
            type="text" required
            
            placeholder="Nome" />

          <input value={date}
            onChange={mudaDate}
            type="date" required
            placeholder="Nascimento" />


          <input value={cpf}
            onChange={mudaCpf}
            type="number" required
            pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" title={"CPF XXX.XXX.XXX-XX"}
            placeholder="CPF" />

          <input value={numero}
            onChange={mudaNumero}
            type="number" required
            placeholder="número" />

          <input value={cep}
            onChange={mudaCep}
            type="text" required
            title={"Formato XX.XXX-XXX"}
            placeholder="CEP" />

          <input value={logradouro}
            onChange={mudaLogradouro}
            type="text"
            placeholder="Logradouro" />


          <input value={bairro}
            onChange={mudaBairro}
            type="text"
            placeholder="bairro" />

          <input value={cidade}
            onChange={mudaCidade}
            type="text"
            placeholder="cidade" />


          <input value={estado}
            onChange={mudaEstado}
            type="text" placeholder="estado" />



          <button>Registrar</button>
        </form>
      </PageRegister>
    </div>


  );
}

export default Register;





