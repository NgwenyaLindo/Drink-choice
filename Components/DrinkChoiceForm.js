import React, { useState } from 'react';

const DrinkChoiceModel = () => {
  const [drinkChoices, setDrinkChoices] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, quantity, size } = event.target.elements;
    const drinkChoice = {
      name: name.value,
      quantity: quantity.value,
      size: size.value,
    };
    setDrinkChoices([...drinkChoices, drinkChoice]);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" id="quantity" name="quantity" />
        <label htmlFor="size">Size: </label>
        <select id="size" name="size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Add Drink Choice</button>
      </form>
      {drinkChoices.length > 0 ? (
        <ul>
          {drinkChoices.map((drinkChoice, index) => (
            <li key={index}>
              <span>{drinkChoice.name}</span>
              <span>{drinkChoice.quantity}</span>
              <span>{drinkChoice.size}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No drink choices yet.</p>
      )}
    </div>
  );
};

export default DrinkChoiceModel;
