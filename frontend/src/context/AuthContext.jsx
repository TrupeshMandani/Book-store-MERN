import { createContext, useEffect, useState, useContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register a new user
  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(userCredential.user); // Update state with the new user
      return userCredential;
    } catch (error) {
      console.error("Error registering user:", error.message);
      throw error;
    }
  };

  // Log in an existing user
  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(userCredential.user); // Update state with the logged-in user
      return userCredential;
    } catch (error) {
      console.error("Error logging in user:", error.message);
      throw error;
    }
  };

  // Log out the user
  const logoutUser = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null); // Clear user state on logout
    } catch (error) {
      console.error("Error logging out user:", error.message);
      throw error;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result.user); // Update state with the Google-signed-in user
      return result;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error;
    }
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({
          email,
          username: displayName,
          photo: photoURL,
        }); // Update state with user details
      } else {
        setCurrentUser(null); // No user logged in
      }
      setLoading(false); // Update loading state
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  // Context value
  const value = {
    currentUser,
    registerUser,
    loginUser,
    logoutUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}{" "}
      {/* Render children only when loading is complete */}
    </AuthContext.Provider>
  );
};
