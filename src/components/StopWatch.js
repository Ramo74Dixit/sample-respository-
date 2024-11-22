import React,{useState,useRef} from 'react'

const StopWatch = () => {
    const [time,setTime]=useState(0);
    const timeRef=useRef(null);
    const startTimer=()=>{
        if(!timeRef.current){
            timeRef.current=setInterval(()=>{setTime(prevTime=>prevTime+1);},1000);
        }
    }
    const stopTimer=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;
    }
    const resetTimer=()=>{
       stopTimer();
       setTime(0);
    }
  return (
    <div>
      <h2>StopWatch:{time} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default StopWatch
