import "./App.css";
import { useState } from 'react';

function App() {

  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("")

  let imgSrc = '';

  /**
   * computes the bmi using the standard formular. This is
   * an event handler for the form submission buttons.
   * prevent submitting to the server which is the default
    behaviour of the form input
   * @param {event} event 
   */
  let calcBMI = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter valid values, please. ")
    } else {
      let bmi = { height }
      setBmi(bmi);
    }
  }

  /**
   * reloads the scrren to the initial values, that is,
   * 0 for weight and height.
   */
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="main-container">

        <h1 className="App-header">BMI CALCULATOR</h1>
        <form onSubmit={calcBMI}>
          <label>Height (m)</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)}></input><br /><br />
          <label>Weight (kg)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          <br />
          <div >
            <button className="btn-submit" type="submit">
              Submit</button>

            <button className="btn-reload" onClick={reload} type="submit">
              Reload</button>
          </div>
        </form>

        <div className="img-show">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>

          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
