import "./App.css";
import { useState } from 'react';

function App() {

  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("")



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
      let bmi = weight / (height * height);
      // console.log(`bmi is ${bmi}`); // for testing
      setBmi(bmi.toFixed(1));
      if (bmi <= 18.5) {
        setMessage("You are underweight")

      } else if (bmi > 18.5 && bmi < 24.9) {
        setMessage("You have normal weight")

      } else if (bmi >= 25.0 && bmi < 29.9) {
        setMessage("You are overweight")

      } else {
        setMessage("You are obese")

      }
    }
  }
  let imgSrc
  if (bmi < 1) {
    imgSrc = null;
  } else if (bmi < 18.5) {
    imgSrc = require("../src/assets/under.png")
  } else if (bmi > 18.5 && bmi < 24.9) {
    imgSrc = require("../src/assets/normal.png")
  } else if (bmi >= 25.0 && bmi < 29.9) {
    imgSrc = require("../src/assets/over.PNG")
  } else {
    imgSrc = require("../src/assets/obese.png")
  }


  /**
   * reloads the scrren to the initial values, that is,
   * 0 for weight and height.
   */
  let reload = () => {
    window.location.reload();
  };

  /**
   * show images based on the bmi value
   */



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
          <p><em>{message}</em></p>

          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
