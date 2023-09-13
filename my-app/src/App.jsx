import './App.css'
import Demo from './components/Demo'

function App() {

  return (
    <>
      <div>
        <Demo />
        <Person feeling="moja"></Person>
        <Person feeling="baje"></Person>
        <Person></Person>
      </div>
    </>
  )
}

function Person(props){
const personStyle = {
  border: '5px solid red',
  padding:'10px',
  margin:'50px'
}
console.log(props);
  return (
    <>
        <div style={personStyle}>
          <h1>Component prectice choltace!!</h1>
          <h3>tobe {props.feeling} lagtace</h3>
        </div>
    </>
  )
}

export default App;
