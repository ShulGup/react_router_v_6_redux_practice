import { createContext, useState } from "react";

export const contextProvider = createContext();

export const MyProvider = ({ children }) => {
  const [showUI, setShowUI] = useState(false);
  return (
    <contextProvider.Provider value={{ showUI, setShowUI }}>
      {children}
    </contextProvider.Provider>
  );
};
