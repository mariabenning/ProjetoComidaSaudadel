import { BackgroundServices, TextServices, TitleKnowMore, KnowMoreButton} from "./styled";



const Services = () => {
    return (

        <div>
            <BackgroundServices>  </BackgroundServices>
            
           <TitleKnowMore><h1>The best services ready To serve you</h1></TitleKnowMore>
           
             <TextServices>
             <p> Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts.
                Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.
                A small river named Duden flows by their place and
                supplies it with the necessary regelialia.</p>
            <KnowMoreButton>Know More</KnowMoreButton>
            
            </TextServices>
           
           
        </div>

    );
}

export default Services;