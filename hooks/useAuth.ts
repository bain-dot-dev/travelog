import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [verificationSent, setVerificationSent] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    setVerificationSent(true);
    return userCredential;
  };

  const resendVerificationEmail = async () => {
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      setVerificationSent(true);
    }
  };

  const logOut = () => {
    setVerificationSent(false);
    return signOut(auth);
  };

  return { 
    user, 
    signIn, 
    signUp, 
    logOut, 
    verificationSent,
    resendVerificationEmail,
    isEmailVerified: user?.emailVerified 
  };
}

