const express = require('express')
const router = express.Router()
const empMiddleware = require('./adminMiddleware')


router.get('/all', empMiddleware.GetAllEmployeeList, empMiddleware.sendResponse)

module.exports = router