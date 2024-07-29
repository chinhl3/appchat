const express = require('express');
const router = express.Router();
const messageController = require('../controller/Chatcontroller');

router.post('/send', async (req, res, next) => {
    const { conversationId, senderId, text } = req.body;
    const message = await messageController.sendMessage(conversationId, senderId, text);
    if (message) {
        res.status(201).json({ message: 'Message sent successfully', message });
    } else {
        res.status(500).json({ message: 'Message sending failed' });
    }
});

router.get('/:conversationId', async (req, res, next) => {
    const { conversationId } = req.params;
    const messages = await messageController.getMessages(conversationId);
    res.status(200).json(messages);
});

module.exports = router;