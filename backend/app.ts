import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import apiRouter from './routes/api/index.routes'
import dbConnection from './config/db'

dotenv.config()

const app = express()

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use('/api', apiRouter)

const PORT = process.env.PORT ?? '3000'
app.listen(PORT, () => {
  dbConnection()
    .then(() => console.log(`Listening on port ${PORT}`))
    .catch(e => {
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error(e)
      }

      throw new Error('DB connection failed')
    })
})
