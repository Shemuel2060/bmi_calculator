import "./App.css";
import { useState } from 'react';
import axios from 'axios';


import HeightWeightInfo from "./components/metricData";
import underweight from "./assets/under.png";
import normalweight from "./assets/normal.png";
import overweight from "./assets/over.PNG";
import obese from "./assets/obese.png";

function App() {
  const client = axios.create({
  baseURL: "https://localhost:8080/patient/addPatient" 
});

  // state
   const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
   const [weight, setWeight] = useState(0);
   const [height, setHeight] = useState(0);
   const [bmi, setBmi] = useState(0);
   const [message, setMessage] = useState("")
  const [imgUrl, setImgUrl] = useState('');
  const [posts, setPosts] = useState([]);

  const addPosts = (pName,pAge,pSex,pWeight,pHeight,pBMI) => {
      client
         .post('', {
            name: pName,
            age: pAge,
            sex: pSex,
            weight: pWeight,
            height: pHeight,
            bmi: pBMI
         })
         .then((response) => {
            setPosts([response.data, ...posts]);
         });
      setName('');
      setAge('');
      setSex('');
      setWeight();
      setHeight();
      setBmi('');
   }; // end of addPosts() function

  return (
    <div className="App">
       <div className="title-container">
        <h1 className="title-txt">BMI CALCULATOR</h1>
      </div>
     
      <div>
        <HeightWeightInfo
          className="height-weight"                
          /**
          * computes the bmi using the standard formular. This is
                * an event handler for the form submission buttons.
                * prevent submitting to the server which is the default
                  behaviour of the form input
                * @param {event} event
            
           */
          let handleClick={
            (event) => {
              event.preventDefault();
              if (weight === 0 || height === 0) {
                alert("Enter valid values, please. ")
                setImgUrl('');
              } else {
                let bmi = weight / (height * height);
                // console.log(`bmi is ${bmi}`); // for testing
                setBmi(bmi.toFixed(1));
                if (bmi <= 18.5) {
                  setMessage("You are underweight")
                  setImgUrl(underweight)                 

                } else if (bmi > 18.5 && bmi < 24.9) {
                  setMessage("You have normal weight")
                  setImgUrl(normalweight)

                } else if (bmi >= 25.0 && bmi < 29.9) {
                  setMessage("You are overweight")
                  setImgUrl(overweight)

                } else {
                  setMessage("You are obese")
                  setImgUrl(obese)
                }
                
              }
              addPosts(name,age,sex,weight,height,bmi); // posts data to the database
              
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



