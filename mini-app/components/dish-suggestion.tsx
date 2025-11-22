"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DishSuggestionProps {
  dish: string;
}

export default function DishSuggestion({ dish }: DishSuggestionProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Suggested Dish</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{dish}</p>
      </CardContent>
    </Card>
  );
}
