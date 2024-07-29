const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'Conversation'
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', messageSchema);