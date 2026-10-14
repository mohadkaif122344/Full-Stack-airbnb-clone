import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authDataContext = createContext();

const Authcontext = ({ children }) => {
  const API = import.meta.env.VITE_BACKEND_URL;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  const getUser = async ()=>{
    try {
      setLoading(true)
      const {data} = await axios.get(API +"/api/auth/user",{
        withCredentials:true,
      })
      setUserData(data.user)
    } catch (error) {
      setUserData(null)
    }finally{
      setLoading(false)
    }
    };

    useEffect(()=>{
getUser()
    },[])
  
 const value = {
      API,
      getUser,
      userData,
      setUserData,
      loading,
      setLoading
    }

    return (
        <authDataContext.Provider value={value}>
          {children}
        </authDataContext.Provider>
  );
};

export default Authcontext;
