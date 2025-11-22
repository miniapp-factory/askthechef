"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface IngredientInputProps {
  onSubmit: (ingredients: string) => void;
}

export default function IngredientInput({ onSubmit }: IngredientInputProps) {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = () => {
    if (ingredients.trim()) {
      onSubmit(ingredients);
      setIngredients("");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <Input
        placeholder="Enter ingredients separated by commas"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <Button onClick={handleSubmit} className="w-full">
        Suggest Dish
      </Button>
    </div>
  );
}
