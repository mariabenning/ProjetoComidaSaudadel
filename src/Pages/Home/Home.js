
import React from 'react';
import { goToBlog, goToHealthyRecipes, goToJoin, goToRegister } from '../../Routes/coordinator';
import { BackgroundHome, Header, NavMenu , TextHome, InputHome, ImgLupa} from './styled';
import MenuMobile from '../MenuMobile/MenuMobile';
import {useHistory } from 'react-router-dom';

const Home = () => {
const history = useHistory()


    return (

        <div>

            <BackgroundHome>
                
                    <NavMenu>
                
                    <NavMenu onClick={()=> goToHealthyRecipes(history)}>HEALTHY  RECIPES</NavMenu>
                    <NavMenu onClick={()=> goToBlog(history)}>BLOG</NavMenu>
                    <NavMenu onClick={()=> goToJoin(history)}>JOIN</NavMenu>
                    <NavMenu onClick={()=> goToRegister(history)}>REGISTER</NavMenu>
                    
                </NavMenu>
            </BackgroundHome>
            <Header>


                <h1>HEALTHY FOOD</h1>

            </Header>
            <MenuMobile></MenuMobile>
            <TextHome >
            <h2>Ready for Trying a new recipe?</h2>
            
            
            <InputHome type="search" id="search" placeholder="Search healthy recipes"></InputHome>
            <ImgLupa src="https://cdn-icons-png.flaticon.com/512/2089/2089732.png" alt="pesquisar" height="16px" width="16px"></ImgLupa>
            
            </TextHome>
        </div>

    );
}



export default Home;