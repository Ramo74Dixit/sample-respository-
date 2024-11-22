import React, { useCallback, useState } from 'react'
// first component
const UISearchbar = ({items,onSearch}) => {
    return (
      <div>
        <input  
         type="text"
         placeholder='Search Any Fruit you want'
         onChange={(e)=>onSearch(e.target.value)}
         />
         <ul>
            {
                items.map((item)=>(
                    <li key={item}>{item}</li>
                ))
            }
         </ul>
      </div>
    )
  }
// Parent component
const Searchbar = () => {
    const [query,setQuery]=useState("")
    const items=["vaibhav","paras","mohit","aman","dev ji ", "shahil sheikh"];
    const filteredItems=items.filter(item=>item.toLowerCase().includes(query.toLowerCase()))
    const onSearch=useCallback((enteredtext)=>{
        setQuery(enteredtext);
    },[])
  return (
    <div>
      <UISearchbar items={filteredItems} onSearch={onSearch}/>
    </div>
  )
}

export default Searchbar
