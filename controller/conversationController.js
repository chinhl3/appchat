const Conversation = require('../models/Conversation');

const createConversation = async (members) => {
    try {
        const newConversation = new Conversation({ members });
        const savedConversation = await newConversation.save();
        return savedConversation;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getUserConversations = async (userId) => {
    try {
        const conversations = await Conversation.find({ members: userId }).populate('members', 'username email');
        return conversations;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getConversationBetweenUsers = async (userId1, userId2) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [userId1, userId2] } }).populate('members', 'username email');
        return conversation;
    } catch (error) {
        console.log(error);
        return null;
    }
};


module.exports = { createConversation, getUserConversations, getConversationBetweenUsers};