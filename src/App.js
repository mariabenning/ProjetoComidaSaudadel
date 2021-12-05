import React from 'react'

import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Juntese from './Pages/Juntese/Juntese';
import Receitas from './Pages/receitas/Receitas';
import Sabermais from './Pages/Sabermais/Sabermais';
import styled from "styled-components"
import { imagenHome } from './Pages/Home/Home';



export default function App() {
  return (
    <div>
      <Home></Home>


      {/* <Receitas></Receitas>
      <Juntese></Juntese>
      <Blog></Blog>
      <Sabermais></Sabermais> */}

    </div>
  );
}




