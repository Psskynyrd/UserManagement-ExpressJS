const express = require('express')
const router = express.Router()

const usersController = require('../controller/users.controller')

router.post("/", usersController.create);
router.get("/", usersController.getAll);
router.get("/:id", usersController.getById);
router.put("/:id", usersController.update);
router.delete("/:id", usersController._delete);

module.exports = router;
