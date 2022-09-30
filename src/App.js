import './App.css';
import { useState } from 'react';

function App() {
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)
  const [age,setAge] = useState(0)

 function laske(e) {
  e.preventDefault()
  const tulosA = (220 - age) * 0.85
  const tulosY = (220 - age) * 0.65
  setUpper(tulosY)
  setLower(tulosA)
 }

  return (
    <div >
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
          <input value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{lower.toFixed(2)}-{upper.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
