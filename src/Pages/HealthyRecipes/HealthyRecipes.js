import react from "react";
import comida_1 from '../../img/comida_1.svg'
import comida_2 from '../../img/comida_2.svg'
import comida_3 from '../../img/comida_3.svg'
import comida_4 from '../../img/comida_4.svg'
import { CardComida, TextCard, TextPrincipal, backgroundCard, TextHecipes, TitleRecipes, ButtonCard} from './styled';



const HealthyRecipes = () => {
  return (
    <div>
      <TextPrincipal>
      <TitleRecipes>
        <h1>Our Best Recipes</h1>
        </TitleRecipes>
        <TextHecipes>
        <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          Vokalia and Consonantia, there live the blind texts. </h2>
          </TextHecipes>
          
      <CardComida>
        <img src={comida_1} ></img>
        
        <TextCard word-break >Broccoli Salad with Bacon
          <ButtonCard>See Recipe</ButtonCard>
          </TextCard>
      </CardComida>



      <CardComida>
        <img src={comida_2} ></img>
        <TextCard>Classic Beef Burgers
          <ButtonCard>See Recipe</ButtonCard>
          </TextCard>
      </CardComida>


      <CardComida>
        <img src={comida_3} ></img>
        <TextCard> Cherry Cobbler on the Grill
          <ButtonCard>See Recipe</ButtonCard>
          </TextCard>
      </CardComida>


      <CardComida>
        <img src={comida_4}></img>
        <TextCard>Classic Potato Salad
          <ButtonCard>See Recipe</ButtonCard>
          </TextCard>
      </CardComida>




      </TextPrincipal>



    </div>
  );
}


export default HealthyRecipes;