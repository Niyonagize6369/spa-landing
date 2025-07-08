// D:/spa-landing/src/context/AppContext.jsx
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [message] = useState("Welcome to our React SPA!");
  return (
    <AppContext.Provider value={{ message }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
