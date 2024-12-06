import express from 'express'
import {
    authenticate,
    authorize
} from '../controller/auth_controller.js'
console.log(authenticate);

const app = express()

app.post('/login', authenticate)

export default app