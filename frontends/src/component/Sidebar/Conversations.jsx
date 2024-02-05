import React from "react";
import Coversation from "./Conversation";
import useGetConersation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/Emoji";

const Coversations = () => {
  const { loading, data } = useGetConersation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {data?.map((item,index) => (
        <Coversation
          key={item._id}
          _id={item._id}
          fullname={item.fullname}
          profilePic={item.profilePic}
          emoji={getRandomEmoji()}
          lastIndex={index === data.length -1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Coversations;
