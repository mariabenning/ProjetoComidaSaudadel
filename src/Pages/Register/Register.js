import React from "react";
import { BackgroundRegister } from "./styled";


const Register = () => {
  return (
    <div>
      <BackgroundRegister/>
      <h1>Register</h1>

        <input type = "nome" placeholder = "digite seu nome"></input>
        <input type = "date" placeholder = "data de nascimento"></input>
        <input type = "text" placeholder = "cpf"></input>
        <input type = "text" placeholder = "cep"></input>
      
        <button>Registrar</button>
      

    </div>


  );
}

export default Register;





