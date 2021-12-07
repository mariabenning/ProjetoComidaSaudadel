
import React from 'react'
import styled from "styled-components";
import Illutration from '../../img/Illustration.svg';
 



 const  Home = ()  => {




    
    return (
        <div>

            <h1>Healthy Food</h1>
            <h2>Ready for Trying a new recipe?</h2>
            <input placeholder="Search healthy recipes"></input>
             <img src={Illutration} ></img> 
        </div>
    );
}



export default Home;