"use client";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./item";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();
    // const meal = {
    //   idMeal: data.idMeal,
    //   strMeal: data.strMeal,
    //   strMealThumb: data.strMealThumb,
    // };
    // return meal;
    //setMeals(data.meals);
    return data.meals;
  } catch (error) {
    console.log("Error", error);
  }
}

export default function MealIdeas({ ingredient }) {
  // meals is an array, will hold the list of meal ideas fetched from the API
  const [meals, setMeals] = useState([]); // initialize it as empty array

  useEffect(() => {
    loadMealIdeas();
    // if (ingredient) {
    //   loadMealIdeas();
    //   //fetchMealIdeas(ingredient);
    // }
  }, [ingredient]);

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
  }

  return (
    <div className="m-2">
      {/* { !== null ? (
        <h2 className="pt-1 pb-4 text-2xl font-bold">Meal Ideas {ingredient}</h2>
      ) : (
        <h2 className="pt-1 pb-4 text-2xl font-bold">Meal Ideas for all</h2>
      )} */}
      <h2 className="pt-1 pb-4 text-2xl font-bold">Meal Ideas {ingredient}</h2>
      
      <ul>
        {meals !== null && meals !== undefined ? (
          meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)
        ) : (
          <p>Not found</p>
        )}
      </ul>
    </div>
  );
}


