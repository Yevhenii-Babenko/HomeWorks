import React, { useState, useEffect, step } from 'react';

export default function Timer({time, autostart}) {
    const [timer, setTimer] = useState(time);
    const [autoRun, setautoRun] = useState(autostart);

   /*  useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input]) */

    return(
        <React.Fragment>
            <div>
                <h1> Our counter: {timer} </h1>
                <button>Start</button>
                <button>Pause</button>
            </div>
        </React.Fragment>
    )
}


