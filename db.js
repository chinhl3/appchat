const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://cangigame2:112004@chat.04t7cme.mongodb.net/?retryWrites=true&w=majority&appName=chat'; // Thay thế bằng chuỗi kết nối MongoDB của bạn

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
