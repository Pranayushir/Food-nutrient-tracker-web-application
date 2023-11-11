import styled from "styled-components";

export const StyledButtonadd = styled.button`
  border: 10px solid blue;
  background-color: #4caf50;
  color: white;
  text-align: center;
  text-decoration: none; 
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin: 0;
  position: absolute;
  top: 7.7%;
  left: 65%;
  height: 40px;
  width : 200px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 6px;
` 


export const StyledFancyButton = styled(StyledButtonadd)`
background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
border: none;
`

// export const SubmitButton = styled(StyledButtonadd).attrs({
//     type:'submit'
// })
// `
//     box-shadow: 0 9px #099;
//     &:active{
//         background-color: ${(props)=>props.variant !== 'outline' ? '#FFF' : '#4caf50'};
//         box-shadow: 0 5px #666;
//         transform: translateY(4px);
//     }
// `