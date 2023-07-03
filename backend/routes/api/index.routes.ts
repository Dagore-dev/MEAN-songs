import { Router } from 'express'
import songsRouter from './songs.routes'

const router = Router()

router.use('/songs', songsRouter)

export default router
