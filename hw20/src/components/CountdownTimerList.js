import React, { useState, useEffect } from 'react';
import  './CountdownTimerListStyles.css'

function CountdownTimerList({time, autostart, step, onTick, onTimeEnd, onTimePause}) {

  const [timer, setTimer] = useState(time);
  const [timerOn, setTimerOn] = useState(autostart);
  const hasTimerEnd = timer <= 0;

  useEffect(() => {
    let interval = null;
    if(timerOn && hasTimerEnd !== true) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1)
        onTick(timer)
      }, step)
    } else {
      clearInterval(interval)
    }
    return () => { 
      clearInterval(interval)
    }
  }, [timer, timerOn, step, onTick, hasTimerEnd])

  useEffect(() => {
    if(hasTimerEnd){
      clearInterval(setTimerOn)
      setTimerOn(false)
      onTimeEnd()
    }
  }, [hasTimerEnd, onTimeEnd])

  return (
    <div className="container"> 
      <div>
        <div className="timer timer__display">
          <span>Time are left:</span>
          <span className="timer__display">{("0" + timer).slice(-2)}</span>
        </div>
        <div className="timer__btn"> 
          <button onClick={() => setTimerOn(true)}>Start</button>
          <button onClick={() => setTimer(time)}>Reset</button>
          <button onClick={() => setTimerOn(false)}>Stop</button>
          <button onClick={() => {
            setTimerOn(true)
            onTimePause()}}
          >Resume</button>
        </div>
      </div>
    </div>
    
  );
}

export default CountdownTimerList;