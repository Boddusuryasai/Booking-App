import React from 'react'
import { useAuth } from '../Context/UserContext'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Header from './Header';
const Main = () => {
    const navigate = useNavigate()
    const {user,setUser}= useAuth()
    async function handleLogout() {
        await axios.post('http://localhost:5000/api/v1/auth/logout');
        navigate("/")
        setUser(null);
        console.log(user)
      }
  return (
    <main className="relative">
    <Header/>
    <hr />
    <hero className="flex flex-col justify-center my-5  gap-6 p-20">
      <h1>Home That Makes <br />Your Living Life</h1>
      <p>Are you looking for amazing real estate dont worry , <br /> we got it for you</p>
      <div className="flex flex-row ">
        <button>Learn More</button>
      </div>
    </hero>
    <div className="flex flex-row justify-around  card-footer" style={{backgroundColor: 'white', padding: '40px 20px', borderRadius: 8, width: 1200}}>
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
    </div>
  </main>
  )
}

export default Main