import "./App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';


import HeightWeightInfo from "./components/metricData";
import underweight from "./assets/under.png";
import normalweight from "./assets/normal.png";
import overweight from "./assets/over.PNG";
import obese from "./assets/obese.png";

function App() {

  // MODIFICATION: Put all these into a single state variable object since they change together.
  // state
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [weight, setWeight] = useState('0');
    const [height, setHeight] = useState('0');
    const [bmi, setBmi] = useState('0');
    const [message, setMessage] = useState("")
    const [imgUrl, setImgUrl] = useState('');
    const [patient, setPatient] = useState([]);
  
  console.log(`first bmi: ${bmi}`); // follow this value to see how it changed
  
    const client = axios.create({
  baseURL: "https://localhost:8080/patient/" 
});  

  const addpatient = (pName, pAge, pSex, pWeight,
    pHeight, pBMI) => {
      client
         .post('http://localhost:8080/patient/addPatient', {
            name: pName,
            age: pAge,
            sex: pSex,
            weight: pWeight,
            height: pHeight,
            bmi: pBMI,
         })
         .then((response) => {
            setPatient([response.data, ...patient]);
         });
    
  }; // end of addpatient() function

  // get data from endpoint when app loads
  useEffect(() => {
    client.get('http://localhost:8080/patient/getPatient')
      .then((response) => {
        setPatient(response.data)
      })
  });
 
    
    
  




  return (
    <div className="App">
       <div className="title-container">
        <h1 className="title-txt">BMI CALCULATOR</h1>
      </div>
     
      <div>
        <HeightWeightInfo
          
      
          className="height-weight"        
          
          let handleSubmit={    
            
            (event) => {
              event.preventDefault();
              if (weight === 0 || height === 0) {
                alert("Enter valid values, please. ")
                setImgUrl('');
              } else {
                // update all the  values
                setName(name)
                setSex(sex) 
                setAge(age)
                setWeight(weight)
                setHeight(height)
                // setBmi(n => n + (weight / (height * height)).toFixed(1))
                // setBmi(() => (weight / (height * height)).toFixed(1));
                // console.log(`second bmi: ${bmi}`); 
                
                let bmi_val = (weight / (height * height)).toFixed(1);
                setBmi(bmi_val); // update the bmi value
                // console.log(`bmi is ${bmi}`); // for testing
                
                if (bmi_val <= 18.5) {
                  setMessage("You are underweight")
                  setImgUrl(underweight)  
                  // setBmi(bmi_val)

                } else if (bmi_val > 18.5 && bmi < 24.9) {
                  setMessage("You have normal weight")
                  setImgUrl(normalweight)
                  // setBmi(bmi_val)

                } else if (bmi_val >= 25.0 && bmi < 29.9) {
                  setMessage("You are overweight")
                  setImgUrl(overweight)
                  // setBmi(bmi_val)

                } else if(bmi_val >= 30.0){
                  setMessage("You are obese")
                  setImgUrl(obese)
                  // setBmi(bmi_val)
                }
              }
              // setBmi(bmi_val);              
              addpatient(name, age, sex, weight, height, bmi); // patient data to the database
              
            }           
              
          }
          // declare all the state variables and state functions as props to the child component
            setName={setName}
            setAge={setAge}
            setSex={setSex}
            setBmi={setBmi}
            setHeight={setHeight}
            setWeight={setWeight}
            setImgUrl={setImgUrl}
            height={height}
            weight={weight}
            bmi={bmi}
            message={message}
            imgUrl={imgUrl}

          useGotData={(e) => {
            e.preventDefault();
            return (
              <div>
              <h2>Patient Data 📫</h2>
                {patient.map((post) => {
                  return (
                      <div key={post.id}>
                        <p>Name: {post.name}</p>
                        <p>Age: {post.age}</p>
                      </div>
                  );
                })}
              </div>
            );
            
          }
          
          }          
          
          /><br/>
      </div>
      
    </div>
  );
  
}

export default App;



