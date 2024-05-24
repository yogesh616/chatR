import {  useState } from 'react'
import './App.css'
import { Auth } from './Components/Auth'
import Cookies from 'universal-cookie'
import { getAuth, signOut } from 'firebase/auth'
import { auth } from './Config/firebase'

function App() {
  const cookies = new Cookies()
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.get('auth-token'))

  async function handleSignout() {
    try {
      cookies.remove('auth-token')
      setIsLoggedIn(false);
      console.log('User signed out successfully');
      const authInstance = getAuth(auth) 
      console.log(authInstance)
      await signOut(authInstance)
       } 
    catch (err) {
      console.error('Error signing out:', err.message);
     
      }
  }
  return (

  <div className="App">
      {isLoggedIn ? (
        <>
        
          <h1>Chat</h1>
          <button onClick={handleSignout}>Sign Out</button>
          {/* Add your chat interface components here */}
        </>
      ) : (
        <Auth onSignIn={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}

export default App
