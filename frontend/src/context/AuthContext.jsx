import { createContext, useState } from "react";

import { useContext } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

//AuthProvider
export const AuthProvide = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // register a User Function
  const registerUser = async (email, password) => {
    return await jcreateUserWithEmailAndPassword(email, password, auth);
  };
  const value = {
    currentUser,
    registerUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
