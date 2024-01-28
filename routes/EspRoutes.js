const express = require('express')
const { getDeviceInfo, getFlameSensor, getMemoryInfo } = require('../controllers/EspController')

const router = express.Router()

router.get('/device-info', getDeviceInfo)
router.get('/memory', getMemoryInfo)
router.get('/flame-sensor', getFlameSensor)

module.exports = router