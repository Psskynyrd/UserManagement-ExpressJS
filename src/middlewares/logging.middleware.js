const express = require("express");

const logging = (req, res, next) => {
  var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  console.log(`Access Date Time: ${new Date()} : ${ip}`);
  next();
};

module.exports = {
  logging,
};
