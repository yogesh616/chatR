import React, { useState, useEffect } from 'react';
import { auth, provider } from '../Config/firebase.js';
import { signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import '../App.css';

export const Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        console.log(user);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <div className='google'>
        <img src="https://s.yimg.com/fz/api/res/1.2/S3fST7w3xYmfC.ud9K2fvQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTIw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300" alt="google" />
        <button className='authBtn' onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  );
};
