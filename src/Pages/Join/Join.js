import { BackgroundJoin, TextJoin,  ButtonJoin , InputEmail } from "./styled";

const Join = () => {
  return (
    <div>
      <BackgroundJoin></BackgroundJoin>
      <TextJoin>
        <h1>Join our membership to get special offer</h1>
      </TextJoin>
        <InputEmail>
        <input placeholder="Enter your email address"></input>
        <ButtonJoin ButtonJoin >Join</ButtonJoin >
        </InputEmail>

    
    </div>
  );
}

export default Join;
