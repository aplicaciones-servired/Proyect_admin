import { getMetasController, getMetasPdv } from '../controllers/metas.controller'
import { Router } from 'express'

export const RouterMetas = Router()

RouterMetas.get('/metas/:zona', getMetasController)

RouterMetas.get('/sucursal/:zona', getMetasPdv)