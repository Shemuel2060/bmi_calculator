import "./App.css";
import { useState} from 'react';


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
 

  return (
    <div className="App">
       <div className="title-container">
         <h1 className="title-txt">BMI <br/>CALCULATOR</h1>
         <p className='how-to-use-note'>
            To use this app, enter in your name, ages, height in meters and
            weight in kgs. Then submit. <br/>
            You can reload the page with the reload button in which it clears
            all your previous inputs and gives a fresh start!            
         </p>
         <h3 className="enjoy">Enjoy</h3>
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
          
          /><br/>
      </div>
      
    </div>
  );
  
}

export default App;



