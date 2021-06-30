import React , {useState} from 'react'
import {Message} from './Message'
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let [isSeason, setSeason] = useState(true)
  return (
    <div className = {`summer ${isSeason ? '' : 'winter'}`}>
      <h3>The current Season is {isSeason ? 'Summer' : 'Winter'}
      </h3>
      <Message counter = {count}/>
      <br />
      <button onClick = {
        () => setCount(++count)
      }>Update Counter</button> <br />

      <button onClick = {
        () => setSeason(!isSeason)
      }>Change Season</button>

    </div>
  );
}

export default App;
