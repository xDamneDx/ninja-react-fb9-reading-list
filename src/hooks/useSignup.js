import { useState } from "react";

// Firebase imports:
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User signep up:", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};
