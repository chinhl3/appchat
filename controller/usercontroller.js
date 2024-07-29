const usermodel = require('../models/usermodel');

const adduser= async(username,email,password)=>{
    try {
        var user= await usermodel.findOne({ email });
        if(user){
            console.log('User already exists');
            return;
        }else{
             user = new usermodel({username, email, password});
            var resutl =await user.save();
            console.log('User added successfully');
            return resutl;
        }
    } catch (error) {
        console.log(error);
    }
}
const login=async(email,password)=>{
    try {
        var user= await usermodel.findOne({ email, password});
        if(user){
            console.log('User logged in successfully');
            return user;
        } else{
            console.log('Invalid credentials');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}
const getlistuser=async()=>{
    try {
        var users= await usermodel.find();
        if(users){
            return users;
        }else{
            console.log('No users found');
            return [];
        }
        
    } catch (error) {
        console.log(error);
    }
}
module.exports={adduser,login,getlistuser}