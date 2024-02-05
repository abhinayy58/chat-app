import React, { useEffect, useRef } from "react";
import Message from "./Message";
import SingleMessage from "./SingleMessage";
import useGetMessage from "../../hooks/useGetMessages";
import MessageSkeleton from "../Skeleton/MessageSkeleton";
import useListenMessage from "../../hooks/useListenMessage";

const MessageBox = () => {
  const { loading, message } = useGetMessage();
  useListenMessage()
  const lastMessageRef = useRef();
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [message]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        message.length > 0 &&
        message.map((item) => (
          <div key={item._id} ref={lastMessageRef}>
            <SingleMessage message={item} />
          </div>
        ))}

      {loading && <MessageSkeleton />}
      {loading && <MessageSkeleton />}
      {!loading && message.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default MessageBox;
