import express from 'express'
import asyncHandler from 'express-async-handler'
import Upload from '../models/UploadModel.js'

const uploadRouter = express.Router()

// GET ALL IMAGES
uploadRouter.get(
  '/all',
  asyncHandler(async (req, res) => {
    const image = await Upload.find({}).sort({ _id: -1 })
    if (image) {
      res.status(200).json(image)
    } else {
      res.status(404)
      throw new Error('Images Not Found')
    }
  })
)

// POST IMAGE
uploadRouter.post(
  '/',
  asyncHandler(async (req, res) => {
    const { image, title } = req.body
    const createImage = { image, title }

    if (createImage) {
      const newImage = await Upload.create(createImage)
      res.status(201).json(newImage)
    } else {
      res.status(404)
      throw new Error('Invalid Data')
    }
  })
)

export default uploadRouter
