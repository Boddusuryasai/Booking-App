import axios from 'axios';
import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from '../Context/UserContext';
import logo from "../Icons/Logo.svg"
const Header = () => {
    const {user,setUser}= useAuth()
    const navigate = useNavigate()
    async function handleLogout() {
       try {
        await axios.post('http://localhost:5000/api/v1/auth/logout');
        navigate("/")
        setUser(null);
       } catch (error) {
          console.log(error)
       }
      }
  return (
    <header className="flex flex-row items-center justify-between my-5 p-20">
      <Link to="/"><img className="h-40" src={logo} alt /></Link>
      <ul className="flex flex-row gap-8">
        {user?(<>
        <Link to="/accomodations" >My Accomodations</Link>
        <Link to="/bookings">My Bookings</Link>
        <li onClick={handleLogout} className='cursor-pointer'>logout</li>
        </>):(<><Link to="/login">Login</Link>
        <Link to="signup">SignUp</Link></>)}  
      </ul>
    </header>
  )
}

export default Header