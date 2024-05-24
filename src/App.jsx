import { useState, useEffect } from 'react';
import './App.css';
import { Auth } from './Components/Auth';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Config/firebase';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  async function handleSignOut() {
    try {
      await signOut(auth);
      setUserData(null);
      console.log('User signed out successfully');
    } catch (err) {
      console.error('Error signing out:', err.message);
    }
  }

  return (
    <div className="App">
      {userData ? (
        <>
          <div className='container m-1 p-3'>
            <img className='photoURL mx-1 my-2' src={userData.photoURL} alt="User Profile" />
            <p className='displayName'>{userData.displayName}</p>
          </div>
          <h1>Chat</h1>
          <button className='btn btn-secondary' onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
