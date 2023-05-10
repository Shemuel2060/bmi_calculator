
import React,{useState} from 'react';


function HeightWeightInfo(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");

    
   
    
  /**
   * reloads the screen to the initial values, that is,
   * 0 for weight and height.
   */
  let reload = () => {
    window.location.reload();
    };



    return (
        <div className="main-container">
            <div className="name_labels">
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Sex</label>
                <input value={sex} onChange={(e) => setSex(e.target.value)} />
                <label>Age</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} />
              
                <label>Height (m)</label>
                <input value={props.height} onChange={(e) => props.setHeight(e.target.value)}></input><br />
                <label>Weight (kg)</label>
                <input value={props.weight} onChange={(e) => props.setWeight(e.target.value)} />
                <br />
            </div>
            <div className="frm">
                <form  onSubmit={props.handleClick}>
                    <div >
                        <button className="btn-submit" type="submit">
                        Submit</button>
                        <button className="btn-reload" onClick={reload} type="submit">
                        Reload</button>
                    </div>
                    <div className="img-show">
                        <h3>Your BMI is: {props.bmi}</h3>
                        <p><em>{props.message}</em></p>
                        <img src={props.imgUrl} alt="" height="250px" />
                    </div><br/>
                </form>
            </div>
            
        </div>
    )
}
export default HeightWeightInfo;


