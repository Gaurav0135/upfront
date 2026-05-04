import React from "react";

const LoadingSpinner = ({ size = 40, className = "" }) => {
  const stroke = 3;
  return (
    <div className={`flex items-center justify-center ${className}`} aria-live="polite">
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        className="animate-spin text-sky-400"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
        />
        <path
          d="M45 25a20 20 0 00-20-20"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
