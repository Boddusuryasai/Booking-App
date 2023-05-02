import React, { useEffect, useState } from 'react'
import Placecard from './Placecard'
import axios from "axios"
const PlacesList = () => {
const [places,setPlaces] = useState([])
 const getAllPlaces=async()=>{
    try {
        const {data}= await axios.get("http://localhost:5000/api/v1/place/getallplaces")
        setPlaces(data.places)
    } catch (error) {
         console.log(error)
    }
 }
useEffect(()=>{
    getAllPlaces()
},[])
console.log(places)
  return (
    <section className="my-6">
    <h1 className="text-black text-center">
      Our Best Estate,<br /> are Modern
    </h1>
    <div className="flex flex-row justify-center items-center gap-6 flex-wrap">
    {places  && places.slice(0,3).map((place,index)=>{
         return <Placecard place={place} key={place._id} index={index} />
    })}
    </div>
    <div className="flex flex-row justify-center items-center gap-6 flex-wrap">
    {places  && places.slice(3,6).map((place,index)=>{
         return <Placecard place={place} key={place._id} index={index}/>
    })}
    </div>
    <div className="flex flex-row justify-center items-center gap-6" style={{ flexDirection: 'row-reverse' }}>
    {places  && places.slice(6,9).map((place,index)=>{
         return <Placecard place={place} key={place._id} index={index}/>
    })}
    </div>
    </section>
  )
}

export default PlacesList