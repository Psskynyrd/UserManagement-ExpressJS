const express = require("express");
const moment = require('moment');

const User = require("../models/user.model");
const { getNextSequenceValue } = require("../utils/helper.util");

const createUser = async (userData) => {
  let getId = await getNextSequenceValue("userId");

  var bd =  moment(userData.birthDate, 'DD/MM/YYYY').toDate();

  let user = {
    userId: getId,
    ...userData,
    birthDate: bd,
  };

  const newUser = new User(user);
  return await newUser.save().then(() => {
    console.log('Create User Successfully');
  }).catch((err) => {
    throw new Error(err);
  });
};

const getUsers = async () => {
  return await User.find({})
    .then((res) => {
        console.log('Get All User Successfully');
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const getUserById = async (userId) => {
  return await User.find({ userId })
    .then((res) => {
        console.log('Get User By ID Successfully');
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const updateUser = async (userId, updateData) => {

    var bd =  moment(updateData.birthDate, 'DD/MM/YYYY').toDate();

    var data = {
        ...updateData,
        birthDate: bd,
    }
    
  return await User.updateOne(
    { userId: userId },
    { $set: data },
    { upsert: true }
  )
    .then((res) => {
        console.log('Update User Successfully');
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const deleteUser = async (userId) => {
  return await User.deleteOne({ userId: userId })
    .then((res) => {
        console.log('Delete User Successfully');
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
