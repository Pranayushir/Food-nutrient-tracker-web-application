import styled from "styled-components";


const StyledButtonVita = styled.button`
  /* height: 300px; */
  width:250px;
  border: 2px solid black;
  background-color: #B0E0E6;
  color :black;
  padding: 15px 20px; 
  text-align: center;
  text-decoration: none; 
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin: 0;
  position: absolute;
  top: 18%;
  left: 60%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  &:hover{
    background-color: ${(props) => props.variant !== "outline" ? "#00BFFF" : "skyblue"};
  color: ${(props) => props.variant !== "outline" ? "black" : "green"};
  }
` 

export default StyledButtonVita