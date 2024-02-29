import React, { useState } from 'react';
import './App.css';

function App() {
  const [ingredientsList, setIngredientsList] = useState([]);

  const addIngredient = () => {
    const ingredientInput = document.querySelector('.add-ingredients-input');
    const newIngredient = ingredientInput.value.trim();

    if (newIngredient !== '') {
      setIngredientsList((prevList) => [...prevList, newIngredient]);
      ingredientInput.value = ''; // Clear the input field after adding the ingredient
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Welcome to the recipe finder!
        </h1>
      </div>
      <div className="App-content">
        <p>
          Input ingredients here: 
        </p>
        <div className="add-ingredients">
          <input
            type="text"
            placeholder="Type ingredients here"
            className="add-ingredients-input"
          />
          <p className="add-ingredients-instructions">
            Please add one ingredient at a time
          </p>
          <button className="add-ingredient-button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
        <p>
          Your recipes will be displayed below
        </p>
        {/* Displaying the ingredient list */}
        <div className="show-ingredients">
          <p>
            Your current ingredients are: {ingredientsList.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}


export default App;
