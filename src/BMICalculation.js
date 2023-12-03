import React, { useState } from 'react';

const BMICalculation = () => {
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
};

export default BMICalculation;
