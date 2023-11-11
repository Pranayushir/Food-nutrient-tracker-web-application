import React, { useState } from 'react'
import * as XLSX from "xlsx"
import './Search.css'
import Records from './data.json'
import StyledButtonFat from './ButtonCss/FatButton'
import StyledButtonSugar from './ButtonCss/SugarButton'
import StyledButtonChol from './ButtonCss/CholestrolButton'
import StyledButtonVita from './ButtonCss/VitaminButton'
import { StyledFancyButton } from './ButtonCss/Button'
// import SubmitButton from './ButtonCss/Button'
import styled from 'styled-components'

const StyledDiv = styled.div`
  border: 2px solid black;
  background-color: ${(props) => props.variant === "outline" ? "#FFF" : "#00FFFF"};
  
  padding: 15px 20px; 
  text-align: center;
  text-decoration: none; 
  width: 500px;
  
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin: 0;
  position: relative;
  left: 30%;
  
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  
  display: flex;
  justify-content: center;
` 
function Search() {

  const [data, setData] = useState([]);


  const [quantity, setQuantity] = useState("");
  const [item, setItem] = useState("")
  const [list, setList] = useState([{itema:"0", proteina:"0", fata : "0", caloriesa : "0", carbohydratesa: "0"}])
  const [calories, setCalories] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0)
  const [fat, setFat]  = useState(0)
  const [proteins, setProteins] = useState(0)
  const [F_protein, setF] = useState(0)
  const [F_fat, setF1] = useState(0)
  const [F_calories, setF2] = useState(0)
  const [F_Carbohydrates, setf3] = useState(0)

  const deleteItem = (index) => {
    setF(F_protein - list[index].proteina);
    setF1(F_fat - list[index].fata);
    setF2(F_calories - list[index].caloriesa);
    setf3(F_Carbohydrates - list[index].carbohydratesa);
    setList(prevItems=>{
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };
  const additem=()=>{
    let x = Records.length;
        for(let i = 0; i < x; i++)
        {
        
            if(Records[i].title.toLowerCase() === item.toLowerCase())
            {   
              let x = prompt("Enter the amount of ", Records[i].serving_size);
              setCalories(Records[i].calories*parseInt(x));
              setCarbohydrates(Records[i].carbohydrates*parseInt(x));
              setFat(Records[i].fat*parseInt(x));
              setProteins(Records[i].protein*parseInt(x));
              setF(prevState1=>parseInt(prevState1)+(parseInt(Records[i].protein)*parseInt(x)))
              setF1(prevState2=>parseInt(prevState2)+(parseInt(Records[i].fat)*parseInt(x)));
              setF2(prevState=>parseInt(prevState) + (parseInt(Records[i].calories)*parseInt(x)));
              setf3(prevState=>parseInt(prevState) + (parseInt(Records[i].carbohydrates) * parseInt(x)));              
              setList([...list
                , {itema:Records[i].title, caloriesa:parseInt(x)*Records[i].calories, fata: parseInt(x)*Records[i].fat, proteina:parseInt(x)*Records[i].protein, carbohydratesa : parseInt(x)*Records[i].carbohydrates}
              ])
              break;
            }   
          }   
}

const ShowProteins=()=>{
      alert(`Protein Content is ${F_protein}`)
}

const ShowCalories=()=>{
  alert(`Calories Content is ${F_calories}`)
}

const ShowFat=()=>{
  alert(`Fat Content is ${F_fat}`)
}

const ShowCarbohydrates=()=>{
  alert(`Carbohydrates Content is ${F_Carbohydrates}`)
}
  return (

    <div>
      <span>Content in grams</span>
      <StyledDiv>Add item<input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/></StyledDiv>
      <StyledFancyButton onClick={()=>additem()}>Click to add Item</StyledFancyButton>
      <br/>
      <ul> 
        {  
          list.length > 0 ? list.map((items, index)=><li key = {index}> {items.key} {items.itema} Protein is {items.proteina} Carbohydrates is {items.carbohydratesa} fat is {items.fata} Calories is {items.caloriesa} <button onClick={()=>deleteItem(index)}>Delete</button></li>): " Your List is Empty "
        }
      </ul>
      <br />
      {/* <button onClick={()=>showItems(list)}>Show me the items</button> */}
      <StyledButtonVita onClick={ShowProteins} >Show me Proteins Content </StyledButtonVita>
      <StyledButtonSugar onClick={ShowCarbohydrates}>Show me Carbohydrates Content </StyledButtonSugar>
      <StyledButtonFat onClick={ShowFat}>Show me Fat Content </StyledButtonFat>
      <StyledButtonChol onClick={ShowCalories}>Show me Calories Content </StyledButtonChol>
    </div>
  )
}

export default Search
