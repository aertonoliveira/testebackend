const mongoose = require('mongoose')
require('dotenv').config()

const dbURI = process.env.DATABASE_MONGODB

mongoose.set('strictQuery', true)

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mobile',
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err)
  })
