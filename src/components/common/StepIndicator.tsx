import React from "react";

interface Props {
  currentStep: number;
  totalSteps: number;
  darkBg?: boolean;
}

const StepIndicator: React.FC<Props> = ({ currentStep, totalSteps, darkBg }) => (
  <div className="flex justify-center mt-2 space-x-2">
    {Array.from({ length: totalSteps }, (_, index) => (
      <span
        key={index}
        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
          currentStep === index ? `${darkBg ? "bg-white" : "bg-primary"} shadow-md` : "bg-gray-400"
        }`}
      />
    ))}
  </div>
);

export default StepIndicator;
