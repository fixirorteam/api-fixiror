const express = require('express')
const { getDeviceInfo } = require('../controllers/EspController')

const router = express.Router()

router.get('/', getDeviceInfo)

module.exports = router