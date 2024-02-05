import React from "react";
import useConversation from "../../Store/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Coversation = (props) => {
  const {selectedConversation,setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id === props._id
  const {onlineUser} = useSocketContext()
 const isOnline = onlineUser.includes(props?._id)
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : "" }`} onClick={() => setSelectedConversation(props)} >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={props.profilePic} alt="'user-avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{props.fullname}</p>
            <span className="text-xl">{props.emoji}</span>
        </div>
        </div>
      </div>
      {!props.lastIndex && <div className="divider my-0 py-0 h-1" />}

    </>
  );
};

export default Coversation;
