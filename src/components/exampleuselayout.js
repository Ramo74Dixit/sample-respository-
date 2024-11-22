import React, { useState,useRef, useLayoutEffect } from 'react'

const Exampleuselayout = () => {
    const [bgColor,setbgColor]=useState("lightblue");
    const divRef=useRef(null);
    useLayoutEffect(()=>{
        const width=divRef.current.offsetWidth;
        if(width>500){
            setbgColor("lightgreen");
        }
        else{
            setbgColor("red");
        }
    },[])
  return (
    <div
    ref={divRef}
    style={{
        width:"80%",
        margin:"20px auto",
        padding:"20px",
        textAlign:"center",
        backgroundColor:bgColor,
    }}
    >
     Change the screen size to change the color of div in background; 
    </div>
  )
}

export default Exampleuselayout
