import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from "../Photos/featuresImage1.png"
import axios from 'axios'
import { useAuth } from '../Context/UserContext'
const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {user,setUser}=useAuth()
    const navigate = useNavigate()
    async function registerUser(ev) {
        ev.preventDefault();
        try {
         const {data}= await axios.post('http://localhost:5000/api/v1/auth/signup', {
            name,
            email,
            password,
          });
          setUser(data)
           navigate("/")
        } catch (e) {
            setUser(null)
         console.log(e)
        }
      }
  return (
    <section>
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover object-top" src={img} alt />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="relative ">
        <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
          <h3 className="text-4xl font-bold text-white">
            Find Your Perfect Getaway Today
          </h3>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <li className="flex items-center space-x-3">
              <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                Commercial License
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                Unlimited Food
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                Booking
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                5 star Ratings
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
          SignUp
        </h2>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
        Already have an account?
          <Link to="/login" title className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700" >
          Login Here
          </Link>
        </p>
        <form onSubmit={registerUser} className="mt-8">
          <div className="space-y-5">
          <div>
              <label htmlFor className="text-base font-medium text-gray-900 dark:text-gray-200">
                User Name
              </label>
              <div className="mt-2.5">
                <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900" type="text" placeholder="User Name"
                 value={name}
                 onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor className="text-base font-medium text-gray-900 dark:text-gray-200">
                Email address
              </label>
              <div className="mt-2.5">
                <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900" type="email" placeholder="Email"
                 value={email}
                 onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor className="text-base font-medium text-gray-900 dark:text-gray-200">
                  Password
                </label>
              </div>
              <div className="mt-2.5">
                <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900" type="password" placeholder="Password"
                 value={password}
                 onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
            <div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                Signup
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


  )
}

export default SignUp