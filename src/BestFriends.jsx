import { useEffect, useState } from 'react'
import './BestFriends.css'
import Friend from './Friend';
export default function BestFriends(){
    const [Friends , setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> setFriends(data))
    },[])
    return (
        <div className='box'>
            <h2>Friend:{Friends.length}</h2>
            {
                Friends.map(friend => <Friend friend = {friend}></Friend>)
            }

        </div>
    )
}