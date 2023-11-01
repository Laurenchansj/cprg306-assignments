"use client";
import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas({ ingredient }) {
  try {
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await request.json();
    // const meal = {
    //   idMeal: data.idMeal,
    //   strMeal: data.strMeal,
    //   strMealThumb: data.strMealThumb,
    // };
    // return meal;
    //setMeals(data.meals);
    return data.meals || [];
  } catch (error) {
    console.log("Error", error);
  }
}

export default function MealIdeas({ ingredient }) {
  // meals is an array, will hold the list of meal ideas fetched from the API
  const [meals, setMeals] = useState([]); // initialize it as empty array

  async function loadMealIdeas() {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
      //fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  function show() {
    if (!ingredient) {
      return <p>Choose an ingredient.</p>;
    } else if (meals === null || meals.length === 0) {
      return <p>No meal found for {ingredient}</p>;
    } else {
      return meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>);
    }
  }

  return (
    <div className="m-2">
      <h2 className="pt-1 pb-4 text-2xl font-bold">Meal Ideas</h2>
      <ul>
        {/* {meals
          .filter((meal) => meal.strMeal)
          .map((meal) => (
            <li key={meal.idMeal} className="p-2 m-4 bg-blue-50 max-w-sm">
              <h2 className="text-xl font-bold">{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt="" />
            </li>
          ))} */}
        {/* {ingredient === "" ? (
          <p>Choose an ingredient.</p>
        ) : meals === null || meals.length === 0 ? (
          <p>No meal found for {ingredient}</p>
        ) : (
          meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)
        )} */}
        {/* {meals ? (
          meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)
        ) : (
          <p>No meal found for {ingredient}</p>
        )} */}
        {show()}
      </ul>
    </div>
  );
}
