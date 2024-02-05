import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetConersation = () => {
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState([])

  useEffect(() => {
    const conversation = async () => {
        setLoading(true);
        try {
          const res = await fetch("/api/user/");
    
          const data = await res.json();
          if (data.error) {
            throw new Error(data.error);
          }
          setData(data)
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };
      conversation();
  },[])
  

  return { loading,data };
};

export default useGetConersation;
