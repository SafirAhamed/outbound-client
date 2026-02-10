import React from "react";

export default function StepLineStepper({
  currentStep,
  steps,
}: {
  currentStep: number;
  steps: string[];
}) {
  const totalSteps = steps.length;
  const clampedStep = Math.max(0, Math.min(currentStep, totalSteps - 1));

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        {steps.map((label, idx) => {
          const isDone = idx < clampedStep;
          const isCurrent = idx === clampedStep;
          const isUpcoming = idx > clampedStep;

          return (
            <React.Fragment key={`${label}-${idx}`}>
              <div
                className={
                  "text-[11px] uppercase tracking-wide whitespace-nowrap " +
                  (isCurrent
                    ? "text-slate-900 font-bold"
                    : isDone
                      ? "text-primary font-semibold"
                      : "text-slate-500 font-medium")
                }
              >
                {label}
              </div>

              {idx < totalSteps - 1 && (
                <div
                  className={
                    "h-0.5 flex-1 rounded-full transition-colors " +
                    (isUpcoming ? "bg-slate-200" : "bg-primary")
                  }
                  aria-hidden
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
