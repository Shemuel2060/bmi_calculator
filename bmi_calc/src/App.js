import "./App.css";
import { useState, useEffect, Fragment } from 'react';
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
  let allPatients={}; // all patients objects
  // const [allPatients, setAllPatients] = useState([]);
  
  // console.log(`first bmi: ${bmi}`); // follow this value to see how it changed
  
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
  const url_getall = 'http://localhost:8080/patient/'; // base url

    axios.get(`${url_getall}getAllPatients`)
      .then((response) => {
      allPatients = response.data // save data into this variable
      })
      .catch((error) => {
      console.log(`ERROR: ${error}`)
      })  
  
  // this also works as the one above
  
  // useEffect(() => {
  // axios.get(`${url_getall}getAllPatients`)
  //   .then((response) => response.data)
  //   .then((data) => setAllPatients(data))
  //     .catch((error) => console.log(`ERROR: ${error}`))  
  // });
 
    
    
  




  return (
    <div className="App">
       <div className="title-container">
        <h1 className="title-txt">BMI <br/>CALCULATOR</h1>
      </div>
     
      <div>
        <HeightWeightInfo
          
      
          className="height-weight"        
          
          let handleSubmit={    
            
            (event) => {
              event.preventDefault();
              let bmi_val = 0;
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
                
                bmi_val = (weight / (height * height)).toFixed(1);
                setBmi(bmi_val); // update the bmi value
                // console.log(`bmi is ${bmi}`); // for testing
                
                if (bmi_val <= 18.5) {
                  setMessage("You are underweight")
                  setImgUrl(underweight)  
                  // setBmi(bmi_val)

                } else if (bmi_val > 18.5 && bmi_val < 24.9) {
                  setMessage("You have normal weight")
                  setImgUrl(normalweight)
                  // setBmi(bmi_val)

                } else if (bmi_val >= 25.0 && bmi_val < 29.9) {
                  setMessage("You are overweight")
                  setImgUrl(overweight)
                  // setBmi(bmi_val)

                } else if(bmi_val >= 30.0){
                  setMessage("You are obese")
                  setImgUrl(obese)
                  // setBmi(bmi_val)
                }
              }
              if (bmi_val === 0) {
                alert("invalid bmi value");
              } else {
                addpatient(name, age, sex, weight, height, bmi_val); // patient data to the database
                // alert("Record Successfully commited to DB"); // for testing
              }
              
              
            }           
              
          } // end of handleSubmit function

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
          
          // definie this function as a prop to the Height_weight component
          useGotData={(e) => {
            e.preventDefault();
            return (
              <div>
                {Object.keys(allPatients).map((key) => {
                  // return (<li >{`${value.name}:${value.bmi}`}</li>)
                  console.log(allPatients);
                  // console.log(`${ value.name }: ${value.bmi}`);
                  return (
                    <Fragment >
                      <ul>
                        <li>
                          <p>
                            <b>{allPatients[key].id}:</b>
                            {' ' + allPatients[key].name + ' '}
                            {allPatients[key].bmi}
                          </p>
                        </li>
                      </ul>
                      {/* <div>
                        <ul>
                          {allPatients.map((list, idx) => (
                            <li key={idx}>{list.id}| {list.name}</li>
                          ))}
                        </ul>
                      </div> used this with the useEffect procedure... works as the one above it  */}
                    </Fragment>
                      
                        )
                })
                }

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



