import { BackgroundJoin, TextJoin } from "./styled";

const Join = () => {
  return (
    <div>
      <BackgroundJoin></BackgroundJoin>
      <TextJoin>
        <h1>Join our membership to get special offer</h1>

        <input placeholder="Enter your email address"></input>
        <button>Join</button>
      </TextJoin>

    </div>
  );
}

export default Join;
