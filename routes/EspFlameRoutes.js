const express = require('express')
const { getFlameSensor} = require('../controllers/EspController')

const router = express.Router()

router.get('/', getFlameSensor)

module.exports = router