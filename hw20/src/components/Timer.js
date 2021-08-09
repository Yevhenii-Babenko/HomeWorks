import React, { useState } from 'react';

export default function Timer({time, autostart, step}) {

    const [timeLeft, setTimeLeft] = useState(time);
    const [autoRun, setAutoRun] = useState(autostart);
    console.log(time, autostart, step)
   /*  useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input]) */

    return(
        <React.Fragment>
            <div>
                <h1> Time left: {timeLeft} </h1>

                <button onClick={()=> {
                    setInterval(() => {
                        setTimeLeft(timeLeft => timeLeft - 1)
                        }, step)
                }}>Start</button>
                <button
                disabled = { !autoRun &&  timeLeft === 0}
                onClick={() => {
                    setAutoRun(false);
                    setTimeLeft(timeLeft);
                }} >Pause</button>
            </div>
        </React.Fragment>
    )
}


