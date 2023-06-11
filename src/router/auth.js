const express = require('express')
const router = new express.Router();
const User = require('../models/students')


router.post('/student',async (req,res) =>{
    const user = new User(req.body);
    try {
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).json(error);
    }
});

router.get('/student',async (req,res) =>{
   try {
     const user = await User.find();
     res.status(200).send(user);      
   } catch (error) {
    res.status(400).send(error)
   }    
});

router.get('/student/:id',async (req,res) =>{
   try {
     const user = await User.findById(req.params.id);
      res.status(200).send(user);
   } catch (error) {
    res.status(400).send(error)
   } 
   
});


router.patch('/student/:id',async (req,res) =>{
  try {
    const id = req.params.id
      const updateData = req.body;
      options ={new : true};
      const user = await User.findByIdAndUpdate(
        id , updateData ,options
      )
      res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error)
  }  
   
});

router.delete('/student/:id',async (req,res) =>{
  try {
     const id = req.params.id
     const user = await User.findByIdAndDelete(id)
     res.send(user);
   } catch (error) {
    res.status(500).send(error)
   }
});


module.exports = router;