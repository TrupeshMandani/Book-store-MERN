import { createContext } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

//AuthProvider
const AuthProvide = ({ children }) => {
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
