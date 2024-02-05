import React, { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../Store/useConversation';
import notificationSound from "../assets/sound/notification.mp3";

const useListenMessage = () => {
 const {socket} = useSocketContext()
 const {message,setMessage} = useConversation()
 useEffect(() => {
    socket?.on("newMessage",(newMessage) => {
        newMessage.shouldShake=true
        const sound = new Audio(notificationSound);
			sound.play();
        setMessage([...message,newMessage   ])
    })
    return () => socket?.off("newMessage")
 },[socket,setMessage,message])
}

export default useListenMessage;
