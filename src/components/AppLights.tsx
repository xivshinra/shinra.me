import React from "react";

function AppLights() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute w-48 h-24 bg-indigo-600/50 dark:bg-indigo-400/50 blur-3xl -translate-y-8 -z-10" />
      <div className="absolute right-0 w-48 h-24 bg-indigo-600/50 dark:bg-indigo-400/50 blur-3xl -translate-y-8 -z-10" />
    </div>
  );
}

export default AppLights;
