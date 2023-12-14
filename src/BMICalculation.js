import React, { useState } from 'react';

/*const BMICalculation = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (parseFloat(weight) / Math.pow(parseFloat(height), 2)).toFixed(1);
      setBMI(bmiValue);
    }
  };

  return (
    <div>
      <h2>BMI Calculation</h2>
      <label>
        Weight (kg):
        <input
          type="number"
          step="0.1"
          min="1.0"
          max="300.0"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height (m):
        <input
          type="number"
          step="0.1"
          min="0.1"
          max="3.0"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>BMI: {bmi}</p>}
    </div>
  );
};*/
const BMICalculation = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      setError('Please enter both weight and height.');
      setBMI(null);
    } else {
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height);

      if (
        !isNaN(weightValue) &&
        !isNaN(heightValue) &&
        weightValue > 0 &&
        heightValue > 0 &&
        weightValue <= 300 &&
        heightValue <= 3
      ) {
        const bmiValue = (weightValue / Math.pow(heightValue, 2)).toFixed(1);
        setBMI(bmiValue);
        setError('');
      } else {
        setError('Please enter valid values for weight(max 3 meters) and height(max 300 kg).');
        setBMI(null);
      }
    }
  };

  return (
    <div>
      <h2>BMI Calculation</h2>
      <label>
        Weight (kg):
        <input
          type="number"
          step="0.1"
          min="1.0"
          max="300.0"
          value={weight}
          onChange={(e) => {
            const newValue = e.target.value;
            setWeight(newValue > 0 ? newValue : '');
          }}
        />
      </label>
      <br />
      <label>
        Height (m):
        <input
          type="number"
          step="0.1"
          min="0.1"
          max="3.0"
          value={height}
          onChange={(e) => {
            const newValue = e.target.value;
            setHeight(newValue > 0 ? newValue : '');
          }}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bmi !== null && !error && <p>BMI: {bmi}</p>}
    </div>
  );
};

export default BMICalculation;
