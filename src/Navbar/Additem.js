// import { useState } from "react"
import React from 'react'
var data = Array.from(require('./Nutrients.json'))
function Additem() {

    // const [totalItems, settotalItems] = useState([]);
    // const [item, setitem] = useState("Jayesh")
    // const add_item = ()=>
    // {
    //     settotalItems([...totalItems, {
    //         id:totalItems.length,
    //         value: item,
    //     }])
    // }
  return (
    <div>
        {/* <input type="text" value={item} onChange={(e)=>setitem(e.target.value)}/> */}
      {/* <button onClick={()=>add_item()}>Addit</button> */}
      <div>
        {
            data.map((food)=><div>{food.item}</div>)
        }
      </div>
    </div>
  )
}

export default Additem
