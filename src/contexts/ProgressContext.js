import React, { createContext, useState } from "react";

export const ProgressContext = createContext();

function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export default ProgressProvider;