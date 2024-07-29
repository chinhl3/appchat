var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/usercontroller')

/* GET users listing. */
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  // Kiểm tra dữ liệu và đăng nhập
  if (email && password) {
    const result = await usercontroller.login(email, password);
    if (result) {
      res.json({ message: 'Login successfully', token: result })
    } else {
      res.status(401).json({ message: 'Login failed' })
    }
  }
  else {
    res.status(400).json({ message: 'Invalid credentials' })
  }
});

// Thêm phương thức POST cho /users
router.post('/sigin', async (req, res, next) => {
  const { username, email, password } = req.body
  // Kiểm tra dữ liệu và thêm vào cơ sở dữ liệu
  if (username && email && password) {
    const resutl = await usercontroller.adduser(username, email, password);
    if (resutl) {
      res.status(201).json({ message: 'User created successfully' })
    } else {
      res.status(400).json({ message: 'User creation failed' })
    }
  }


});
//  lay danh sach nguoi dung 
router.get('/list', async (req, res, next) => {
  try {
    const users = await usercontroller.getlistuser();
    if (users) {
      res.json({ message: 'List user successfully', listuser: users })
    } else {
      res.status(400).json({ message: 'List user failed' })
    }
  } catch (error) {
    console.error(error)
  }


});


module.exports = router;
