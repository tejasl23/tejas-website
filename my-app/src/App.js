import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(null);

  const handleTestClick = async () => {
    const num = prompt('Please enter a number:');
    if (num) {
      setNumber(num);
      try {
        const response = await axios.post('http://localhost:5000/multiply', { number: num });
        setResult(response.data.result);
      } catch (error) {
        console.error('Error multiplying number:', error);
      }
    }
  };

  return (
    <div className="App">
      <Navbar onTestClick={handleTestClick} />
      {number && <p>The number you entered is: {number}</p>}
      {result && <p>The result is: {result}</p>}
    </div>
  );
}

export default App;
