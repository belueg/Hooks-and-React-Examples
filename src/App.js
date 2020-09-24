import React, {useState, useEffect} from "react";
import './App.css'
function App() {


  const [count, setCount] = useState(0)
const [title, setTitle] = useState("React")

  useEffect(() => {
    console.log("Title changed")
  
  }, [title])

  return (
    <div className="App">
<p onMouseOver={()=> setTitle("User")}>Helloo {title}</p>
<button onClick={() =>  setCount(count + 1 )}>{count}</button>
    </div>
  );
}

export default App;
