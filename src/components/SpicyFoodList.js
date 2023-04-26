import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
const [foods, setFoods] = useState(spicyFoods);
const [filterBy, setFilterBy] = useState("All");

const foodsToDisplay = foods.filter((food) =>
{
  if (filterBy === "All"){
    return true;
  }else {
    return food.cuisine === filterBy;

  }
});
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => { 
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      }else {
        return food;
      }
        
      });
    setFoods(newFoodArray)
  }
  
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  
  return (
    <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">All</option>
      <option value="Sichuan">All</option>
      <option value="Thai">All</option>
      <option value="Mexican">All</option>
    </select>
  )}

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
  }

export default SpicyFoodList;
