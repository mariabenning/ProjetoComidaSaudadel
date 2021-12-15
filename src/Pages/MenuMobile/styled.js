import styled from "styled-components";





export const NavMobile = styled.div`
display: none;
transform : translate(-250px);
  @media (min-device-width: 320px) and (max-device-width: 480px) {
  display: block;
  color:LimeGreen;
  height: 100vh;
  width: 250px;
  padding: 10px;
  background: white;
  position: fixed;
  
  };
  @media (min-device-width:481px) and (max-device-width: 800px) {
  display: block;
  color:LimeGreen;
`


export const NavMenu = styled.div`

ul {

  li{
padding: 10px 0;
width: 100%;
display: block;

  }
}
`
