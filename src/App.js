import './App.css';
import Output from './Output';
import { useState } from 'react';

const secretNum = Math.floor(Math.random() * 10) + 1;

  function App() {
    const [term, setTerm] = useState("")   //  Now the UseState is in empty value
   function eventChange(event){
    setTerm(event.target.value)
   }
  return (
    <div className="total-container">
      <div className="header">
        <label htmlfor="term">Guess Number From 1 To 10</label>  {/* htmlfor = used to get value form input */}
      </div>
      <input id="term" type="text"  onChange={eventChange}/> 
      <Output secretNum={secretNum} term={term} />
    </div>
  );
}

export default App;
