import express from 'express'
import {
    getAllBarang,
    getBarangbyId,
    addBarang,
    updateBarang,
    deleteBarang
} from '../controller/Barang_controller.js'

import { authenticate, authorize } from '../controller/auth_controller.js'
import { IsAdmin } from '../middleware/role_validation.js'

const app = express()
app.use(express.json())

app.get('/', getAllBarang)
app.get('/:id', getBarangbyId)
app.post('/',authorize,[IsAdmin],  addBarang)
app.put('/:id',authorize,[IsAdmin],  updateBarang)
app.delete('/:id',authorize,[IsAdmin],  deleteBarang)

app.post('/login', authenticate)

export default app