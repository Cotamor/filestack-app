import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import morgan from 'morgan'
import uploadRouter from './routes/UploadRoutes.js'
import { errorHandler, notFound } from './middleware/Errors.js'

dotenv.config()

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// CORS(Cross Origin Resources Sharing)
app.use(cors({ origin : `${process.env.CLIENT_URL}`}))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// API
app.use('/api/uploads', uploadRouter)

// Error Handler
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on http://localhost${port}`
  )
})
