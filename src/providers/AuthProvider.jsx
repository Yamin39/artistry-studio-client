import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileLoader, setProfileLoader] = useState(false);

  // login with email & pass
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const googleProvider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login with github
  const githubProvider = new GithubAuthProvider();
  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // register with email & pass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (user, name, imgUrl) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: imgUrl,
    });
  };

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currently logged user: ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [profileLoader]);

  const authContextInfo = {
    user,
    loading,
    setLoading,
    profileLoader,
    setProfileLoader,
    logIn,
    logInWithGoogle,
    logInWithGithub,
    createUser,
    updateUserProfile,
    logOut,
  };
  return <AuthContext.Provider value={authContextInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
