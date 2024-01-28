const express = require('express')
const cors = require('cors')
require('dotenv').config()

const FlameRoutes = require('./routes/EspFlameRoutes')
const DeviceRoutes = require('./routes/EspDeviceRoutes')
const MemoryRoutes = require('./routes/EspMemoryRoutes')

const app = express()
const port = process.env.PORT_SERVER || 6000

app.use(cors())

app.get('/', (req,res) => {
    res.status(200).json({ message: 'Hallo Fixiror'})
})

app.use('/device-info', DeviceRoutes)
app.use('/memory-info', MemoryRoutes)
app.use('/flame-info', FlameRoutes)



app.listen(port , () => {
    console.log(`Server running on ${port}`);
})