const express = require("express");
const User = require("../models/user.model");
const { getNextSequenceValue } = require("../utils/helper.util");

const createUser = async (userData) => {
  let getId = await getNextSequenceValue("userId");

  let user = {
    userId: getId,
    ...userData,
  };

  const newUser = new User(user);
  return await newUser.save().catch((err) => {
    throw new Error(err);
  });
};

const getUsers = async () => {
  return await User.find({})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const getUserById = async (userId) => {
  return await User.find({ userId })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const updateUser = async (userId, updateData) => {
  return await User.updateOne(
    { userId: userId },
    { $set: updateData },
    { upsert: true }
  )
    .then((res) => {
      console.log(updateData);
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
