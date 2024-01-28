const express = require('express')
const { postIPStatic } = require('../controllers/EspAuthController')

const router = express.Router()

router.get('/config-static-ip', postIPStatic)

module.exports = router