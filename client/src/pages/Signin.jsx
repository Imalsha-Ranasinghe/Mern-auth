import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div>

      <h1 className=' font-bold text-3xl px-12 pt-12 pb-2 flex mx-auto justify-center'>Sign In</h1>
      <p  className=' flex mx-auto justify-center text-slate-400 pb-12'>Sign in to your account</p>

      <div className=''>

      <form className=' px-64 pt-8 flex flex-col mx-auto justify-center w-full gap-8 '>
        
        <input type='text' id='username' placeholder='Enter the username' className=' border p-2 rounded-lg w-full '></input>
        <input type='password' id='password' placeholder='Enter the password' className=' border p-2 rounded-lg w-full '></input>

        <button className=' font-semibold border rounded-xl p-2 py-3 bg-blue-950 text-white uppercase'>Signin</button>
        <button className=' font-semibold  border rounded-xl p-2 py-3 bg-red-900 text-white uppercase'>continue with google</button>
      </form>

      <div className='px-64 py-4 flex gap-4'>
      <p >Do not have an account? </p>
      <Link className=' hover:underline text-blue-950' to={"/sign-up"}>Signup</Link>

      </div>

      
      </div>



    </div>
  )
}
