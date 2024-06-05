/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebasecofig";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setaLoading] = useState(true);
  const axiosCommon = useAxiosCommon();
  const createUser = (email, password) => {
    setaLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (displayName, photoURL) => {
    setaLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user details", currentUser);
      setUser(currentUser);

      if (currentUser) {
        const userinfo = {
          email: currentUser?.email,
        };
        axiosCommon.post("/jwt", userinfo).then((res) => {
                // console.log(res.data)
          if (res.data.token) {
      
            localStorage.setItem("access-token", res.data.token);
            setaLoading(false);
          }
        });
      }else{
        localStorage.removeItem("access-token")
        setaLoading(false);
      }
    
    });
    return () => {
      unSubscribe();
    };
  }, [axiosCommon]);
  const logOut = () => {
    setaLoading(true);
    return signOut(auth)
      .then(toast.success(" User logOut"))
      .catch((error) => console.log(error));
  };
  const signIn = (email, password) => {
    // console.log(email, password);
    setaLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setaLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    signIn,
    createUser,
    updateUser,
    logOut,
    signInWithGoogle,

    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};
export default AuthProvider;
