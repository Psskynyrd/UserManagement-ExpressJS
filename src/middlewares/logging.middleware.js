const express = require("express");

const logging = ((req, res, next) => {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    
  console.log("Access: ", new Date());
  console.log("Access: ", ip);
  next();
});

module.exports = {
    logging
};