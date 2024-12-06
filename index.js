import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoute from './routes/user_routes.js'
import authRoute from './routes/auth_routes.js'
import barangRoute from './routes/barang_routes.js'
import peminjamanRoute from './routes/peminjaman_routes.js'

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/inventory', barangRoute)
app.use('/api/inventor', peminjamanRoute)


app.use(bodyParser.json())

app.listen(process.env.APP_PORT, () => {
    console.log("server run on port "+ process.env.APP_PORT);
})