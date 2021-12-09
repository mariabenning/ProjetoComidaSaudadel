
import React from 'react';
import { goToBlog, goToHealthyRecipes, goToJoin, goToRegister } from '../../Routes/coordinator';
import { BackgroundHome, Header, NavMenu , TextHome } from './styled';
import {useHistory } from 'react-router-dom';



const Home = () => {


    const history = useHistory()


    return (

        <div>

            <BackgroundHome>
                <NavMenu>
                    <button onClick={()=> goToHealthyRecipes(history)}>HEALTHY  RECIPES</button>
                    <button onClick={()=> goToBlog(history)}>BLOG</button>
                    <button onClick={()=> goToJoin(history)}>JOIN</button>
                    <button onClick={()=> goToRegister(history)}>REGISTER</button>

                </NavMenu>
            </BackgroundHome>
            <Header>


                <h1>HEALTHY FOOD</h1>

            </Header>
            <TextHome >
            <h2>Ready for Trying a new recipe?</h2>
            <input type="search" id="search" placeholder="Search healthy recipes"></input>
            <img src="https://cdn-icons-png.flaticon.com/512/2089/2089732.png" alt="pesquisar" height="16px" width="16px"></img>
            </TextHome>
        </div>

    );
}



export default Home;