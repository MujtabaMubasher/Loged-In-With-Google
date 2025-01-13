import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import '../App.css'

export default function Google_Login_Signup() {

    const login = (response)=> {
        console.log("Login Successful", response)
    }
  return (
    <div className='container'>
    <div>
      <h2>Login/SignUp With Google</h2>
      <div className='form-container'>
        <form action="" className='form'>
           <label htmlFor="">Email</label>
           <input type="text" />
           <label htmlFor="">Password</label>
           <input type="password" />
           <button>Submit</button>

           <GoogleLogin
            onSuccess={login}
           />
        </form>
      </div>
    </div>      
  </div>
  )
}
