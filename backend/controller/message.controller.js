import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // 1. Check if the conversation between the sender and receiver already exists
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    // 2. If conversation doesn't exist, create a new one
    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
    }

    // 3. Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // 4. Add the new message's ID to the conversation's messages array
    conversation.messages.push(newMessage._id);

    // 5. Save both the conversation and the new message in parallel using Promise.all
    await Promise.all([conversation.save(), newMessage.save()]);

    // 6. Add Socket.io
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId)
      io.to(receiverSocketId).emit("newMessage", newMessage);

    res.status(201).json({ success: true, message: newMessage });
  } catch (error) {
    console.error("Error in sendMessage:", error.message);
    res.status(500).json({ success: false, error: "Internal Sever Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Find conversation between sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    // Check if conversation exists
    if (!conversation) {
      // Return empty array if no conversation found
      return res.status(200).json({ success: true, message: [] });
    }

    // Return messages if they exist
    res.status(200).json({ success: true, message: conversation.messages });
  } catch (error) {
    console.error("Error in getMessage:", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
