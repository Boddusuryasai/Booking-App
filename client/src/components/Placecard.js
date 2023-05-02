import React from 'react'
const Placecard = ({place,index}) => {
  return (
    <div className={`relative w-300 mt-[${index*5}%] `} >
        <img className="card-img" src={place.photos[0]} alt="card-img" />
        <div className="card-footer">
          <div>
            <h4 className="text-black">{place.title}</h4>
            <small className="text-black">${place.price}</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
  )
}

export default Placecard