import {auth, provider} from '../Config/firebase.js'
import {getAuth, signOut, signInWithPopup } from 'firebase/auth'
import '../App.css'
import Cookies from 'universal-cookie'
import React, { useState} from 'react'

export const Auth = ({ onSignIn })=> {
     const cookies = new Cookies()
     const [img, setImg] = useState(null)
      const signInWithGoogle = async () => {
        try {
       const result = await signInWithPopup(auth, provider)
       console.log(result)
       cookies.set('auth-token', result.user.refreshToken)
       setImg(result.user.photoURL)
       console.log(result.user.photoURL)
       onSignIn()

        } catch (err) {
            console.log(err)
        }
    }

    return(
        <>
        
        <div className="auth">
            <p>Sign In With Google To Continue</p>
            <div className='google'>
                <img src="https://s.yimg.com/fz/api/res/1.2/S3fST7w3xYmfC.ud9K2fvQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTIw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300" alt="google" />
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>

        </div>
        </>
    )
}