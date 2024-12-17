import './App.css';
import { useState } from 'react';

function App() {
  // Making states of our application
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === '0' || height === '0') {
      alert('Please enter valid weight and height...');
    } else {
      // BMI formula for weight in kg and height in cm
      let heightInMeters = height / 100;
      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage('You are underweight...');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight...');
      } else {
        setMessage('You are overweight...');
      }
    }
  };

  // Reload
  let reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter weight in kilograms"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Enter height in centimeters"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
