const express = require('express');
const router = express.Router();
const users = require('../data/index');
const sampleUser = require('../data/sampleUser');


const listUsers = (req, res) => {
    return res.json(users);
}
  
const showUser = (req, res) => {
    let find = users.find(user => user.id === parseInt(req.params.id));
    if(find) {
      return res.json(find);
    } else {
      res.status(404).json({ msg: `No user with the id of ${req.params.id}.` });
    }
}
  
const createUser = (req, res) => {
    let numerator = users.length + 1;
    sampleUser.id = numerator;
    users.push(sampleUser);
    return res.json(users);
}
  
const updateUser = (req, res) => {
    let find = users.find(user => user.id === parseInt(req.params.id));
    if(find) {
      users.forEach(user => {
        if(user.id === parseInt(req.params.id)){
          user.name = sampleUser.name;
          return res.json(user);
        } 
      })
    } else {
      res.status(400).json({ msg: `No user with the id of ${req.params.id}.` });
    }
}
  
const deleteUser = (req, res) => {
    let find = users.find(user => user.id === parseInt(req.params.id));
    if(find) {
      users.forEach(user => {
        if(user._id === parseInt(req.params.userId)){
          return res.json(user);
        } 
      })
    } else {
      res.status(400).json({ msg: `No user with the id of ${req.params.id}.` });
    }
    res.send("User deleted");
}
    
module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }