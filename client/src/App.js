import {  Routes,Route } from 'react-router';
import './App.css';
import Main from './components/Main';
import PlacesList from './components/PlacesList';
import axios from "axios";
import Layout from './components/Layout';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Accomodations from './Pages/Accomodations';
import Bookings from './Pages/Bookings';
import PlaceDetails from './Pages/PlaceDetails';
axios.defaults.withCredentials = true;
function App() {
  return (
  <Routes>
  <Route path="/" element={<Layout/>} />
  <Route path="/accomodations" element={<Accomodations/>} />
  <Route path="/bookings" element={<Bookings/>} />
  <Route path="/place/:id" element={<PlaceDetails/>} />
  <Route path="signup" element={<Signup/>}/>
  <Route path="login" element={<Login/>}/>
  </Routes>

  );
}

export default App;
