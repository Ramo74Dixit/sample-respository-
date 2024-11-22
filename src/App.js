import React from 'react'
import FileName from '../src/components/PropsDrilling'
import ContextSwitcher from "./components/ContextSwitcher"
import Header from './components/Header'
const App = () => {
  return (
    <div>
      <ContextSwitcher>
      <Header/>
      </ContextSwitcher>
    </div>
  )
}

export default App
