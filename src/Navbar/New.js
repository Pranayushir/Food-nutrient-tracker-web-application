import React, {useState} from 'react'
import Records from './data.json'
function New() {
    const [item, setItem] = useState("")
    const getItem=()=>{
    {
        
    }
   }
  return (
    <div>
        <input type="text" value={item} onChange={e=>setItem(e.target.value)}/>
        <button onClick={()=>getItem()}>Get item</button>
    </div>
  )
}

export default New
