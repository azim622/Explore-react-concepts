
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import BestFriends from './BestFriends'
import Friend from './Friend'

function App() {
  function handleClick(){
    alert("Handel Click")
  }
  const handelClick2 =()=>{
    alert("handle click 2")
  }
  const addToFive =(num)=>{
    alert(num + 5)
  }
  const addToSeven =(seven)=>{
    alert(seven - 2)
  }
  const hereMeFunction =(here)=>{
    alert(here *3)

  }

  return (
    <>
      
      <h2>React Core Concept-2</h2>
      <BestFriends></BestFriends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handelClick2}>Click-2</button>
      <button onClick={()=> {alert("third Click")}}>Third Click</button>
      <button onClick={()=>addToFive(3)}>Five</button>
      <button onClick={()=> addToSeven(5)}>Sixth</button>
      <button onClick={()=>{hereMeFunction(5)}}>here ME</button>
      
      
    </>
  )
}

export default App
