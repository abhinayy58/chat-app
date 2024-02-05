import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../Store/useConversation";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
 const {message,setMessage,selectedConversation} = useConversation()

  useEffect(() => {
    const getMessages = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/messages/${selectedConversation._id}`);
    
          const data = await res.json();
          if (data.error) { 
            throw new Error(data.error);
          }
          setMessage(data)
        } catch (error) {
          toast.error(error.message);

        } finally {
          setLoading(false);
        }
      };
    if(selectedConversation?._id)  getMessages();
  },[selectedConversation?._id,setMessage])
  

  return { loading,message };
};

export default useGetMessage;
