const express = require('express')
const cors = require('cors')
require('dotenv').config()

const EspRoutes = require('./routes/EspRoutes')
const AuthEsp = require('./routes/EspAuthRoutes')

const app = express()
const port = process.env.PORT_SERVER || 6000

app.use(cors())

app.use(EspRoutes)
app.use(AuthEsp)

app.listen(port , () => {
    console.log(`Server running on ${port}`);
})