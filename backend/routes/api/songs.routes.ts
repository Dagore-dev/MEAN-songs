import { Router } from 'express'
import Song from '../../models/song.model'

const router = Router()

router
  .get('/', (request, response) => {
    Song.find({})
      .then(songs => response.send(songs))
      .catch(e => response.status(400).send({ message: e.message }))
  })
  .get('/:songId', (request, response) => {
    const { songId } = request.params
    Song.findById(songId)
      .then(song => response.send(song))
      .catch(e => response.status(400).send({ message: e.message }))
  })

export default router
