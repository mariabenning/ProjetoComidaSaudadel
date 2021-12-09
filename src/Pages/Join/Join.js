import { BackgroundJoin, TextJoin, FooterJoin } from "./styled";

const Join = () => {
  return (
    <div>
      <BackgroundJoin></BackgroundJoin>
      <TextJoin>
        <h1>Join our membership to get special offer</h1>

        <input placeholder="Enter your email address"></input>
        <button>Join</button>
      </TextJoin>

    <footer>
    <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
    <p>Privacy Policy</p> 
    <p>Terms and Conditions</p>
    </footer>
    </div>
  );
}

export default Join;
