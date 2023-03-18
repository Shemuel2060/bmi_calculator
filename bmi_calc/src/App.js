

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>BMI CALCULATOR</h1>
        <h3>Height(m)</h3>
        <form>
          <input type="text"></input>
        </form>
        <h3>Weight(kg)</h3>
        <form>
          <input type="text"></input>
        </form><br />
        <div className="btns">
          <button type="submit"> Sumbit</button>
          <br /><br />
          <button type="submit"> Reload</button>

        </div>

        <div className="pic-container">
          <h2>Your BMI is:</h2>
        </div>


      </div>

    </div>
  );
}

export default App;
