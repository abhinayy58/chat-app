import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId,io } from '../socket/socket.js'

async function sendMessage(req, res) {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.message.push(newMessage._id);
    }

    // await conversation.save()
    // await newMessage.save()
    // this will run parellel
    await Promise.all([conversation.save(), newMessage.save()]);

    // Socket.io Functionality

    const recieverSocketId =  getReceiverSocketId(receiverId)
    console.log(recieverSocketId)

    if(recieverSocketId){
      io.to(recieverSocketId).emit("newMessage",newMessage)
    }





    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in send message controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function getMessage(req, res) {
  try {
    const { id: userChatId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userChatId],
      },
    }).populate("message");

    if (!conversation) return res.status(200).json([]);
    const messages = conversation.message;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in get message controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export default { sendMessage, getMessage };
