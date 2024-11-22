import React, { createContext, useContext } from "react";
// creation of context
const MessageContext= createContext();
function Parent(){
    const message="This is my message i want to share";
    return(
        <div>
          <MessageContext.Provider value={message}>
            <Child1/>
          </MessageContext.Provider>
        </div>
    )
}

function Child1(){
      return <Child2/>
}
function Child2(){
  const amandeep = useContext(MessageContext)
    return <h3>This is Amandeep and his message is {amandeep}</h3>
}
function Child3(){
    return <Child4/>
}
function Child4(){
  const message=useContext(MessageContext)
  return   <h1>Hello this meessage is using props drilling is{message}</h1>
}

export default Parent;