"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function FilterButton() {
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);

  const buttonLabels = [
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Robotics",
    "Big Data",
    "Data Analysis",
    "Cloud Computing",
    "DevOps",
  ];

  const handleClick = (index: number) => {
    if (clickedButtons.includes(index)) {
      setClickedButtons(clickedButtons.filter((i) => i !== index));
    } else {
      setClickedButtons([...clickedButtons, index]);
    }
  };

  return (
    <div className="bg-slate-200 p-7 rounded-lg">
      <div className="flex flex-wrap gap-3">
        {buttonLabels.map((label, index) => (
          <Button
            key={index}
            onClick={() => handleClick(index)}
            className={`transition-colors border border-gray-400 rounded-lg ${
              clickedButtons.includes(index)
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {clickedButtons.includes(index) && <Check className="mr-2 h-4 w-4" />}
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
