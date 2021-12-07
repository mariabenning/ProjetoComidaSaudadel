import React from 'react';
import Router from "./Routes/Router";
import  GlobalStyle from "./Pages/Home/styled";
import styled from "styled-components"



const  App = ()  => {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Router/>
   
   </div>
  );
}

export default App




