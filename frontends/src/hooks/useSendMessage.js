import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../Store/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
const {message,setMessage,selectedConversation} = useConversation()

  const sendMessage = async (messages) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            message:messages
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessage([...message,data])
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;

