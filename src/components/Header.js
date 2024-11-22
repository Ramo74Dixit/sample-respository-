import React, { useContext } from 'react'
import {ThemeContext} from "./ContextSwitcher"
const Header = () => {
    const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <header
    style={{
        padding:"10px",
        backgroundColor:theme==="light"?"black":"white" ,
        color: theme === "light"?"black":"white",
        height:"100vh"
    }}
    >
      <h1>Theme is {theme}</h1>
      <button onClick={toggleTheme} style={{color:"blue"}}>Switch theme </button>
    </header>
  )
}

export default Header
