import { getSucursales, executeQuery } from '../controllers/metas.controllers.js'
import { Router } from 'express'

export const metas = Router()

metas.get('/sucursales', getSucursales)

metas.get('/execute', executeQuery)