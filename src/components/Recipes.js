// Recipes.js

import React, { useState, useEffect } from 'react';
import './Recipes.css'; // Import the CSS file for Recipes

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a backend API
    const mockRecipes = [
      { id: 1, title: 'Recipe 1', description: 'This is the description of Recipe 1.' },
      { id: 2, title: 'Recipe 2', description: 'This is the description of Recipe 2.' },
      { id: 3, title: 'Recipe 3', description: 'This is the description of Recipe 3.' },
      { id: 4, title: 'Recipe 4', description: 'This is the description of Recipe 4.' },
    ];
    setRecipes(mockRecipes);
  }, []);

  return (
    <div className="recipes-container">
      <h2>Recipes</h2>
      <ul className="recipes-list">
        {recipes.map(recipe => (
          <li key={recipe.id} className="recipe-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
