import { createContext, ReactNode, useContext, useState } from "react";
import { LoginContextType } from "../types/types";

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);

const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("Context not defined");
  }
  return context;
};

export default LoginProvider;
