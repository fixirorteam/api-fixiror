const express = require('express')
const { getMemoryInfo } = require('../controllers/EspController')


const router = express.Router()

router.get('/', getMemoryInfo)

module.exports = router