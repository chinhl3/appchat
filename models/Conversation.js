const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema  = new Schema({
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    lastMessage: {
      messageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
      text: { type: String },
      createdAt: { type: Date },
    },
});
module.exports = mongoose.model('Conversation', ConversationSchema);