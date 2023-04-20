import './App.css';
import React, { useState, useEffect } from 'react';
import DrinkChoiceForm from './Components/DrinkChoiceForm';
import Decision from './Components/Decision';
import axios from 'axios';

function App() {
  const [metadata, setMetadata] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [decision, setDecision] = useState(null);

  useEffect(() => {
    axios.get('https://api.up2tom.com/metadata/58d3bcf97c6b1644db73ad12', {
      headers: {
        Authorization: 'Bearer 9307bfd5fa011428ff198bb37547f979',
      },
    })
    .then((response) => {
      setMetadata(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://api.up2tom.com/run/58d3bcf97c6b1644db73ad12', inputValues, {
      headers: {
        Authorization: 'Bearer 9307bfd5fa011428ff198bb37547f979',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      setDecision(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="App">
      <h1>Drink Choice</h1>
      {metadata && (
        <DrinkChoiceForm metadata={metadata} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      )}
      {decision && <Decision decision={decision} />}
    </div>
  );
}

export default App;
