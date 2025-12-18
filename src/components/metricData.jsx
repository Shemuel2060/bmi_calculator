
import '../assets/styles/main.css';

function HeightWeightInfo(props) {
  let reload = () => {
    window.location.reload();
  };

  // Determine BMI category for styling
  const getBMICategory = (bmi) => {
    if (bmi === 0) return '';
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
  };

  const bmiCategory = getBMICategory(props.bmi);

  return (
    <div className="main-container">
      <h1>BMI</h1>
      <h2>CALCULATOR</h2>
      
      <p className="intro-text">
        To use this app, enter your name, age, height in meters and weight in kgs. Then submit.
        You can reload the page with the reload button to clear all your previous inputs and get a fresh start!
      </p>
      
      <div className="name_labels">
        <div>
          <label>Name</label>
          <input 
            value={props.name} 
            onChange={(e) => props.setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label>Sex</label>
          <input 
            value={props.sex} 
            onChange={(e) => props.setSex(e.target.value)}
            placeholder="M/F"
          />
        </div>
        
        <div>
          <label>Age</label>
          <input 
            value={props.age} 
            onChange={(e) => props.setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>
        
        <div>
          <label>Height (m)</label>
          <input 
            value={props.height} 
            onChange={(e) => props.setHeight(e.target.value)}
            placeholder="e.g., 1.75"
          />
        </div>
        
        <div>
          <label>Weight (kg)</label>
          <input 
            value={props.weight} 
            onChange={(e) => props.setWeight(e.target.value)}
            placeholder="e.g., 70"
          />
        </div>
      </div>
      
      <div className="form-buttons">
        <button className="btn-submit" type="submit" onClick={props.handleSubmit}>
          Calculate BMI
        </button>
        <button className="btn-reload" onClick={reload} type="button">
          Clear All
        </button>
      </div>
      
      <div className="result-container">
        <h3>Your BMI Result:</h3>
        <div className="bmi-value">{props.bmi || '0.0'}</div>
        {props.message && (
          <div className={`bmi-category ${bmiCategory}`}>
            {props.message}
          </div>
        )}
        {props.imgUrl && (
          <div className="img-show">
            <img src={props.imgUrl} alt="BMI indicator" />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeightWeightInfo;