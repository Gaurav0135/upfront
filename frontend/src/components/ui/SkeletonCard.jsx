import React from "react";

const SkeletonCard = ({ className = "" }) => {
  return (
    <div className={`rounded-2xl glass p-5 ${className}`} aria-hidden>
      <div className="h-44 w-full rounded-md bg-slate-700/40 animate-pulse" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-3/12 rounded-full bg-slate-700/40 animate-pulse" />
        <div className="h-5 w-8/12 rounded bg-slate-700/40 animate-pulse" />
        <div className="h-3 w-full rounded bg-slate-700/30 animate-pulse" />
      </div>
    </div>
  );
};

export default SkeletonCard;
