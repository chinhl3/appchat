const express = require('express');
const router = express.Router();
const conversationController = require('../controller/conversationController');

router.post('/create', async (req, res, next) => {
    const { members } = req.body;
    const conversation = await conversationController.createConversation(members);
    if (conversation) {
        res.status(201).json({ message: 'Conversation created successfully', conversation });
    } else {
        res.status(500).json({ message: 'Conversation creation failed' });
    }
});

router.get('/user/:userId', async (req, res, next) => {
    const { userId } = req.params;
    const conversations = await conversationController.getUserConversations(userId);
    res.status(200).json(conversations);
});

router.get('/between/:userId1/:userId2', async (req, res, next) => {
    const { userId1, userId2 } = req.params;
    const conversation = await conversationController.getConversationBetweenUsers(userId1, userId2);
    res.status(200).json(conversation);
  });

module.exports = router;
