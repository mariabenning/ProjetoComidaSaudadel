
import React from 'react';
import { goToBlog, goToHealthyRecipes, goToJoin, goToRegister } from '../../Routes/coordinator';
import { BackgroundHome, Header, NavMenu, TextHome, InputHome, ImgLupa, SeachButton } from './styled';
import MenuMobile from '../MenuMobile/MenuMobile';
import { useHistory } from 'react-router-dom';
import HealhyRecipe from "../../Pages/HealthyRecipes/HealthyRecipes";

import Services from "../../Pages/services/Services";
import Blog from "../../Pages/Blog/Blog";
import Join from "../../Pages/Join/Join"
import { FiSearch } from "react-icons/fi";
const Home = () => {
    const history = useHistory()


    return (

        <div>

            <BackgroundHome>

                <NavMenu>

                    <NavMenu onClick={() => goToHealthyRecipes(history)}>HEALTHY  RECIPES</NavMenu>
                    <NavMenu onClick={() => goToBlog(history)}>BLOG</NavMenu>
                    <NavMenu onClick={() => goToJoin(history)}>JOIN</NavMenu>
                    <NavMenu onClick={() => goToRegister(history)}>REGISTER</NavMenu>

                </NavMenu>
            </BackgroundHome>

            <Header>


                <h1>HEALTHY FOOD</h1>

            </Header>
            <MenuMobile></MenuMobile>
            <TextHome >
                <h2>Ready for Trying a new recipe?</h2>


                <InputHome  type="search" id="search" placeholder="Search healthy recipes"></InputHome>
                <SeachButton> <FiSearch ></FiSearch> </SeachButton>

            </TextHome>
            <section>
            <HealhyRecipe></HealhyRecipe>
            </section>
            <Services></Services>
            <section>
                <Blog></Blog>
            </section>
            <section>
                <Join></Join>
            </section>
        </div>

    );
}



export default Home;