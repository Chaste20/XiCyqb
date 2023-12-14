import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BMICalculation from './BMICalculation';

test('calculates BMI correctly with valid inputs', () => {
  const { getByLabelText, getByText } = render(<BMICalculation />);

  // Mock valid inputs
  fireEvent.change(getByLabelText(/Weight \(kg\)/i), { target: { value: '70' } });
  fireEvent.change(getByLabelText(/Height \(m\)/i), { target: { value: '1.75' } });

  // Trigger BMI calculation
  fireEvent.click(getByText(/Calculate BMI/i));

  // Check if BMI is displayed correctly
  expect(getByText(/BMI: 22.9/i)).toBeInTheDocument();
});

test('displays error with empty inputs', () => {
  const { getByText } = render(<BMICalculation />);

  // Trigger BMI calculation with empty inputs
  fireEvent.click(getByText(/Calculate BMI/i));

  // Check if error message is displayed
  expect(getByText(/Please enter both weight and height/i)).toBeInTheDocument();
});

test('displays error with invalid inputs', () => {
  const { getByLabelText, getByText } = render(<BMICalculation />);

  // Mock invalid inputs (negative weight)
  fireEvent.change(getByLabelText(/Weight \(kg\)/i), { target: { value: '-70' } });
  fireEvent.change(getByLabelText(/Height \(m\)/i), { target: { value: '1.75' } });

  // Trigger BMI calculation
  fireEvent.click(getByText(/Calculate BMI/i));

  // Check if error message is displayed
  expect(getByText(/Please enter valid values for weight(max 3 meters) and height(max 300 kg)./i)).toBeInTheDocument();
});

