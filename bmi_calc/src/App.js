import "./App.css";
import { useState } from 'react';


import HeightWeightInfo from "./components/metricData";

function App() {

  // state
   const [weight, setWeight] = useState(0);
   const [height, setHeight] = useState(0);
   const [bmi, setBmi] = useState(0);
   const [message, setMessage] = useState("")
   const [imgUrl,setImgUrl] = useState('');

  return (
    <div className="App">
       <div className="title-container">
        <h1 className="title-txt">BMI CALCULATOR</h1>   
      </div>
     
      <div>                 
        <HeightWeightInfo
          className="height-weight"
            let calcBMI={
            /**
                * computes the bmi using the standard formular. This is
                * an event handler for the form submission buttons.
                * prevent submitting to the server which is the default
                  behaviour of the form input
                * @param {event} event 
            */
            (event) => {
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
              }}
          const imgSrc={
            (bmi) => {
              if (bmi < 1) {
                  setImgUrl('');
                } else if (bmi < 18.5) {
                  setImgUrl("../src/assets/under.png")
                } else if (bmi > 18.5 && bmi < 24.9) {
                  setImgUrl("../src/assets/normal.png")
                } else if (bmi >= 25.0 && bmi < 29.9) {
                  setImgUrl("../src/assets/over.PNG")
                } else {
                  setImgUrl("../src/assets/obese.png")
              }
            }
          }
            height={height}
            weight={weight}
            bmi={bmi}
            message={message}
            setHeight={setHeight}
            setWeight={setWeight}
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
          /><br/>      
      </div>
      
    </div>
  );
}

export default App;
