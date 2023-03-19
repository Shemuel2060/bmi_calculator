import "./App.css";
import { useState } from 'react';

function App() {

  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(" ");
  const [message, setMessage] = useState(" ")

  let imgSrc = '';




  return (
    <div className="App">
      <div className="main-container">
        <h1 className="App-header">BMI CALCULATOR</h1>
        <form>
          <label>Height (m)</label><br /><br />
          <input value={height}></input><br /><br />
          <label>Weight (kg)</label><br /><br />
          <input value={weight} />
          <br />
          <div >
            <br />
            <button className="btn-submit" type="submit"> Sumbit</button>
            <br /><br />
            <button className="btn-reload" type="submit"> Reload</button>
          </div>
        </form>

        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-show">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
