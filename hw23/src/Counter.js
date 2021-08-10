import React, { useState } from 'react'

function CounterTest()  {
const [counter, setCounter] = useState(0);

const increment = () => {
    setCounter((prevCounter) => {
        return prevCounter + 1
    })
}
const decrement = () => {
    setCounter((prevCounter) => {
        if(prevCounter <= 0) {
            return prevCounter
        } else {
            return prevCounter -1
        }
    })
}
    return (
        <div>
            <p>Counter value: { counter } </p>
            <button onClick={increment}>plus one</button>
            <button onClick={decrement}>subtract one</button>
        </div>
    )
    
}

export default CounterTest
