import mongoose from 'mongoose'

const uploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const Upload = mongoose.model('Upload', uploadSchema)

export default Upload
