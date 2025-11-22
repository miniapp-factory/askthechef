"use client";

import { useState } from "react";
import IngredientInput from "./ingredient-input";
import DishSuggestion from "./dish-suggestion";

export default function RecipeSuggester() {
  const [dish, setDish] = useState<string | null>(null);

  const suggestDish = (ingredients: string) => {
    const lower = ingredients.toLowerCase();
    if (lower.includes("tomato") && lower.includes("basil")) {
      setDish("Caprese Salad");
    } else if (lower.includes("chicken") && lower.includes("rice")) {
      setDish("Chicken Fried Rice");
    } else {
      setDish("Try a simple stir-fry with your ingredients!");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <IngredientInput onSubmit={suggestDish} />
      {dish && <DishSuggestion dish={dish} />}
    </div>
  );
}
