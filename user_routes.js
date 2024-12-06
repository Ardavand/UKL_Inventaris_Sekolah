import express from 'express'
import {
    getAllUser,
    getUserbyId,
    addUser,
    updateUser,
    deleteUser
} from '../controller/User_controller.js'

import { authenticate, authorize } from '../controller/auth_controller.js'
import { IsAdmin } from '../middleware/role_validation.js'

const app = express()

app.get('/', getAllUser)
app.get('/:id', getUserbyId)
app.post('/',  addUser)
app.put('/:id', authorize, [IsAdmin],  updateUser)
app.delete('/:id', authorize, [IsAdmin],  deleteUser)

app.post('/login', authenticate)

export default app