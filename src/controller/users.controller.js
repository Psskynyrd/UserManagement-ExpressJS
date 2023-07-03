const usersService = require('../services/users.service')
const {success} = require('../utils/response.util')

const create = async (req, res, next) => {
    try {
        let createUser = await usersService.createUser(req.body)
        
        res.json(success(200, createUser))
    } catch (error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        let getAllUsers = await usersService.getUsers()
        
        res.json(success(200, getAllUsers))
    } catch (error) {
        next(error)
    }
}
const getById = async (req, res, next) => {
    try {
        const userId = req.params.id

        let getUser = await usersService.getUserById(userId)
        
        res.json(success(200, getUser))
    } catch (error) {
        next(error)
    }
}
const update = async (req, res, next) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        
        let updateUser = await usersService.updateUser(userId, updateData)
        
        res.json(success(200, updateUser))
    } catch (error) {
        next(error)
    }
}
const _delete = async (req, res, next) => {
    try {
        const userId = req.params.id

        let deleteUser = await usersService.deleteUser(userId)
        
        res.json(success(200, deleteUser))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    _delete
}