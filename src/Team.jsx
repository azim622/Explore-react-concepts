import { useState } from "react"

export default function Team(){

    const [team , setTeam]=useState(11)
     
    const addPlayer =()=>{
        setTeam(team +1)
    }
    const removePlayer =()=>{
       setTeam(team -1)
    }

    const teamStyle = {
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'10px'
    }
    return (
        <div style={teamStyle}>
            <h2>Players : {team}</h2>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}