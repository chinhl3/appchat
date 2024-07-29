const messagemodel = require('../models/Message')
const Conversation = require('../models/Conversation');
const sendMessage = async (conversationId, senderId, text) => {
    try {
        const newMessage = new messagemodel({
            conversationId,
            senderId,
            text
        });
        const savedMessage = await newMessage.save();

        // Update last message in conversation
        await messagemodel.findByIdAndUpdate(conversationId, {
            lastMessage: {
                messageId: savedMessage._id,
                text: savedMessage.text,
                createdAt: savedMessage.createdAt,
            },
            updatedAt: Date.now()
        });

        return savedMessage;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getMessages = async (conversationId) => {
    try {
        const messages = await messagemodel.find({ conversationId });
        return messages;
    } catch (error) {
        console.log(error);
        return [];
    }
};

module.exports = { sendMessage, getMessages };
