import React from "react";
import ViewAllLink from "./ViewAllLink";

export interface SectionProps {
  title?: string;
  viewAllUrl?: string;
  children?: React.ReactNode;
  lessSpace?: boolean;
  noSpace?: boolean;
  fullWidth?: boolean;
  centerTitle?: boolean;
  titleSize?: "small" | "medium" | "large";
  className?: string;
}

const TITLE_SIZE_CLASSES: Record<
  NonNullable<SectionProps["titleSize"]>,
  string
> = {
  small: "text-base md:text-lg lg:text-xl",
  medium: "text-lg md:text-2xl lg:text-3xl",
  large: "text-xl md:text-3xl lg:text-4xl",
};

const Section: React.FC<SectionProps> = ({
  title,
  viewAllUrl,
  children,
  lessSpace,
  noSpace,
  fullWidth,
  centerTitle,
  titleSize = "medium",
  className,
}) => {
  const titleSizeClasses = TITLE_SIZE_CLASSES[titleSize];

  return (
    <div
      className={`relative max-w-screen-2xl mx-auto mt-4 sm:mt-6  ${className} ${
        lessSpace
          ? "px-2 md:px-4 lg:px-6"
          : noSpace
          ? "lg:px-4"
          : fullWidth
          ? ""
          : "px-4 sm:px-6 md:px-20"
      }`}
    >
      {title && (
        <div
          className={`${
            centerTitle
              ? "grid grid-cols-3 items-center"
              : "flex items-center justify-between"
          } mb-4 ${noSpace ? "mx-2 md:mx-4 lg:mx-6" : ""}`}
        >
          {centerTitle ? (
            <>
              <div />
              <h2
                className={`${titleSizeClasses} font-bold tracking-tight text-[#052210] capitalize text-center whitespace-nowrap col-start-2 justify-self-center`}
              >
                {title}
              </h2>
              <div className="flex justify-end col-start-3">
                {viewAllUrl && <ViewAllLink viewAll={viewAllUrl} />}
              </div>
            </>
          ) : (
            <>
              <h2 className={`${titleSizeClasses} font-bold tracking-tight text-[#052210] capitalize `}>
                {title}
              </h2>
              {viewAllUrl && <ViewAllLink viewAll={viewAllUrl} />}
            </>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Section;
