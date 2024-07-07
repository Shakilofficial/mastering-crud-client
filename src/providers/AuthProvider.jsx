import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getRedirectResult,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  };

  const googleLogin = () => {
    setIsLoading(true);
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  const handleRedirectResult = () => {
    setIsLoading(true);
    getRedirectResult(auth)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const values = {
    createUser,
    login,
    user,
    isLoading,
    logout,
    googleLogin,
    handleRedirectResult,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
