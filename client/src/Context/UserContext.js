import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const AuthContext = createContext({});
const AuthProvider = ({children})=>{
    const [user,setUser]=useState(null);
    const [ loading,setLoading] = useState(false);
    const getProfile = async()=>{
        if (!user) {
            axios.get('http://localhost:5000/api/v1/auth/profile').then(({data}) => {
              setUser(data);
              setLoading(true);
            });
          }
    }

    useEffect(()=>{
         getProfile()
    },[])
    return (<AuthContext.Provider value={{user,loading,setUser}}>
        {children}
    </AuthContext.Provider>

    )
}

const useAuth =()=> useContext(AuthContext)
export  {useAuth,AuthProvider}