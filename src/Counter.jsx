import { useState } from "react"

export default function Counter(){
    const [count , setCount]= useState(0)

   const countHandel=()=>{
    const newCount = count +2;
    setCount(newCount)
   }
   const reduceCount=()=>{
    const newCount = count-1
    setCount(newCount)
   }

    return (
        // <div style={{border:"2px solid red"}}>
        //     <h3>Counter:{count}</h3>
        //     <button onClick={countHandle}>Count</button>
        // </div>
        <div style={{border: '2px solid blue'}}>
            <h3>Counter:{count}</h3>
            <button onClick={countHandel}>HEllos</button>
            <button onClick={reduceCount}>Reduce</button>

        </div>
    )
}