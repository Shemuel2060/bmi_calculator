
import { useState } from 'react';
// import axios from 'axios';

import underweight from "../assets/under.png";
import normalweight from "../assets/normal.png";
import overweight from "../assets/over.PNG";
import obese from "../assets/obese.png";



export default function Patient() {

    const [patient, setPatient] = useState({
        name: '',
        age: 0,
        sex: '',
        weight: 0.0,
        height: 0.0,
    });
    const [bmi_message, setBmiMessage] = useState({
        bmi: 0.0,
        message: '',
        imgUrl: '',
    });
    // const [posts, setPosts] = useState([]); // for posting data

    function handleNameInput(e) {
        setPatient({
            ...patient, // cpy other fields
            name: e.target.value            
        });
    }

    function handleAgeInput(e) {
        setPatient({
            ...patient,
        age: e.target.value
        });
    }
    function handleSexInput(e) {
        setPatient({
            ...patient,
            sex: e.target.value
        });
    }
    function handleWeightInput(e) {
        setPatient({
            ...patient,
            weight: e.target.value
        });
    }
    function handleHeightInput(e) {
        setPatient({
            ...patient,
            height: e.target.value
        });
    }
    function compBMI() { 

        // update bmi
        setBmiMessage({
            ...bmi_message,
            bmi: (patient.weight / (patient.height * patient.height)).toFixed(1)
        });        
    }

    function handleBmiMessage() {
        if (patient.bmi <= 18.5) {
            setBmiMessage({
                ...bmi_message,
                message: 'You are under weight',
                imgUrl: {underweight}
            });
            
        } else if (patient.bmi > 18.5 && patient.bmi <= 24.9) {
            setBmiMessage({
                ...bmi_message,
                message: 'You are normal weight',
                imgUrl: {normalweight}
            });
        }else if (patient.bmi >=25.0 && patient.bmi <= 29.9) {
            setBmiMessage({
                ...bmi_message,
                message: 'You are over weight',
                imgUrl: {overweight}
            });
        }else if (patient.bmi >=30) {
            setBmiMessage({
                ...bmi_message,
                message: 'You are obese',
                imgUrl: {obese}
            });
        }
    }

    function handleClick(e) { 
        e.preventDefault(); // prevents reloading of the page
        compBMI()
        handleBmiMessage();
    }

    // const client = axios.create({
    //     baseURL: "https://localhost:8080/patient/addPatient"
    // });

    // const addPosts = (pName, pAge, pSex, pWeight, pHeight, pBMI) => {
    //     client
    //         .post('http://localhost:8080/patient/addPatient', {
    //             name: pName,
    //             age: pAge,
    //             sex: pSex,
    //             weight: pWeight,
    //             height: pHeight,
    //             bmi: pBMI
    //         })
    //         .then((response) => {
    //             setPosts([response.patient, ...posts]);
    //         });
    // }

      let reload = () => {
            window.location.reload(true);
    }












    return (
        <div className="main-container">
            <div className="name_labels">
                <label>Name</label>
                <input value={patient.name}
                    onChange={handleNameInput}></input>
                <label>Sex</label>
                <input value={patient.sex}
                    onChange={handleSexInput} />
                <label>Age</label>
                <input value={patient.age}
                    onChange={handleAgeInput} />              
                <label>Height (m)</label>
                <input value={patient.height}
                    onChange={handleHeightInput}></input><br />
                <label>Weight (kg)</label>
                <input value={patient.weight}
                    onChange={handleWeightInput} />
                <br />
            </div>
            <div className="frm">
                <form onSubmit={handleClick}>
                    <div >
                        <button className="btn-submit"
                            type="submit" >
                        Submit</button>
                        <button className="btn-reload"
                            onClick={reload} type="submit">
                        Reload</button>
                    </div>
                    <div className="img-show">
                        <h3>Your BMI is: {bmi_message.bmi}</h3>
                        <p><em>{bmi_message.message}</em></p>
                        <img src={bmi_message.imgUrl} alt="" height="250px" />
                    </div><br/>
                </form>
            </div>
            
        </div>
    )



}// end of the Data component