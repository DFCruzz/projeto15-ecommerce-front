import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;  
 flex-direction: column; 
  align-items: center;
  justify-content: center;
  background: #94a3b8;
  min-height: 100vh;
 
`;

export const StyledForm = styled.form`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 34px 13px 34px;
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
    ::placeholder {
      font-family: "Raleway";
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
    background: black;
    border-radius: 4.63636px;
    border: none;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    font-family: "Raleway";
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
    font-family: "Raleway";
    line-height: 18px;
    
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    margin-top: 25px;
    cursor: pointer;
    
  }
  span{
      color: black;
      font-weight: 700;
    }
`;

