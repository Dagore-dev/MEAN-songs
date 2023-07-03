import { model, Schema } from 'mongoose'

const songSchema = new Schema({
  title: String,
  artist: String,
  genre: String,
  album: String,
  duration: Number,
  trackNumber: Number,
  isExplicit: Boolean
})

export default model('song', songSchema)
