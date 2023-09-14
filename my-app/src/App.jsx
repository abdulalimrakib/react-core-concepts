import { useEffect, useState } from "react";
import "./App.css";
import Demo from "./components/Demo";

function App() {
  return (
    <>
      <div>
        <Demo />
        <Counter />
        <Users />
        <Person feeling="moja"></Person>
        <Person feeling="baje"></Person>
        <Person></Person>
      </div>
    </>
  );
}

function Person(props) {
  const personStyle = {
    border: "5px solid red",
    padding: "10px",
    margin: "50px",
  };
  console.log(props);
  return (
    <>
      <div style={personStyle}>
        <h1>Component prectice choltace!!</h1>
        <h3>tobe {props.feeling} lagtace</h3>
      </div>
    </>
  );
}

function Counter() {
  let [count, setCount] = useState(10);
  // let setcounter = () =>{
  //    let newCount = count + 1;
  //    setCount(newCount);
  // }
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </>
  );
}


function Users(){
  const [user, setUser] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  })
  return(
    <>
      <ul>
        {
          user.map(users => <li>{users.email}</li> )
        }
      </ul>
    </>
  )
}

export default App;
