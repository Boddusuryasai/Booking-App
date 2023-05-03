import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router'
import axios from 'axios'

const PlaceDetails = () => {
    const {id}=useParams()
    const [place,setPlace] = useState([])
    const getPost = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/v1/place/getplace/"+id)
            
            console.log(res)
          setPlace(res.data.place);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
        getPost()
      },[])
  return (
    <div>
        <Header/>
        {id}
    </div>
  )
}

export default PlaceDetails