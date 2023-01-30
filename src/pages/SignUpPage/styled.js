import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;  
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  background: #013a63;
  min-height: 100vh;
  color: #ffffff;
  font-weight: 700;
  
 
`;

export const StyledForm = styled.form`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 34px 13px 34px;
  letter-spacing: 0.1em;
  /*  topo | direita | inferior | esquerda*/

  .email {
    display: block;
    margin-bottom:5px;
    
    /* color: ; */
  }
  input {
    box-sizing: border-box;
    background-color: #ffffff;
    width: 326px;
    height: 58px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    padding: 0 12px;
    font-weight: 400;
    ::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      position: absolute;
      top: 16px;
      left: 15px;
      color: #000000;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 326px;
    height: 46px;
    background-color: #f18262;
    border: 2px solid #000000;
    border-radius: 4.63636px;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    font-family: 'Press Start 2P', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
  p {
    font-size: 15px;
    line-height: 18px;
    
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    margin-top: 25px;
    cursor: pointer;
    
  }
  span{
      color: #f18262;
      font-weight: 700;
    }
`;

