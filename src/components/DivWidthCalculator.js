import React,{useLayoutEffect, useRef, useState} from 'react'
//1. useState
//2. useRef
//3. useLayoutEffect 
const DivWidthCalculator = () => {
    const[width,setWidth]=useState(0);
    // To provide ref of div we have to use -> useRef hook 
     const divRef=useRef(null)
    // useLayout Effect -> TO measure width After your dom will be update.
    useLayoutEffect=()=>{
        // function to measure width of div 
        const updateWidth = () =>{
            if(divRef.current){
                setWidth(divRef.current.offsetWidth);
            };
        }
        updateWidth();
        // Add an event listener to handle window resize
        window.addEventListener('resize',updateWidth);
        // clean up function 
        return()=>{
            window.removeEventListener('resize',updateWidth);
        },[]
    }
  return (
    <div
    ref={divRef}
    style={{
        border:"2px solid black",
        padding:"10px",
        margin:"20px",
        textAlign:"center",
    }}
    >
      The width of this div is  {width} px.
    </div>
  )
}

export default DivWidthCalculator
