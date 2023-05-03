import { Link } from "react-router-dom"
const Placecard = ({place,index}) => {
  return (
    <div className={`relative w-300 mt-[${index*5}%] scale-95 hover:scale-100 transition duration-200  ease-in hover:shadow-2xl hover:shadow-blue-500/20 `} >
        <img className="card-img" src={place.photos[0]} alt="card-img" />
        <div className="card-footer items-center">
          <div>
            <h4 className="text-black">{place.title}</h4>
            <small className="text-black">${place.price}</small>
          </div>
          <div>
            <Link to={`place/${place._id}`}>
            <button >Detail</button>
            </Link>
            </div>
          
        </div>
      </div>
  )
}

export default Placecard