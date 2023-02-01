import Counter from "./component/Counter";
import {Globalstyle} from './Globalstyle'
import { useState,useEffect } from "react";

function App() {
const [timerDays,setTimerDays]= useState()
const [timerHours,setTimerHours]= useState()
const [timerMinutes,setTimerMinutes]= useState()
const [timerSeconds,setTimerSecondes]= useState()

let interval;
const StartTimer =()=>{
  const countDownDate = new Date('february 7,2023').getTime()
  interval = setInterval(()=>{
    const now = new Date().getTime()
    const distance = countDownDate - now;
    const days = Math.floor(distance/(24*60*60*1000))
    const hours = Math.floor(distance%(24*60*60*1000)/(1000*60*60))
    const minutes = Math.floor(distance %(60*60*1000)/(1000*60))
    const secondes = Math.floor(distance % (60*1000)/(1000))
    if(distance<0){
      clearInterval(interval.current)
    }else{
      setTimerDays(days)
      setTimerHours(hours)
      setTimerMinutes(minutes)
      setTimerSecondes(secondes)
    }
    
  })
}
useEffect(()=>{
  StartTimer()
})
  return (
    <div className="App">
    <Counter timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
    <Globalstyle/>
    </div>
  );
}

export default App;
