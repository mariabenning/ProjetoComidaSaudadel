import bloco_image_1 from "../../img/blog_image_1.svg";
import bloco_image_2 from "../../img/bloco_image_2.svg";
import bloco_image_3 from "../../img/bloco_image_3.svg";
import bloco_image_4 from "../../img/bloco_image_4.svg";
import { TitleBlog, TextBlog, CardBLog, CardImg, CardContainer } from './styled';






export default function Blog() {
  return (
    <div>
      <TitleBlog>
        <h1>Read Our Blog</h1>
      </TitleBlog>
      <TextBlog>
        <h2>Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.</h2>
      </TextBlog>
<CardContainer>
      <CardBLog>
        <CardImg src={bloco_image_1} ></CardImg>
        <h2>Quick-start guideto nuts and seeds</h2>
      </CardBLog>

      <CardBLog>
        <CardImg src={bloco_image_2} ></CardImg>
        <h2>Nutrition: Tips forImproving Your Health</h2>
      </CardBLog>

      <CardBLog>
        <CardImg src={bloco_image_3} ></CardImg>
        <h2>The top 10 benef its of eating healthy</h2>
      </CardBLog>

      <CardBLog>
        <CardImg src={bloco_image_4} ></CardImg>
        <h2>Nutrition: Tips for Improving Your Health</h2>
      </CardBLog>
      </CardContainer>
    </div>
  );
}