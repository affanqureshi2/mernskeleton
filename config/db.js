import config from './config.js'
import mongoose from 'mongoose'

const connection = mongoose.createConnection(config.mongoUri).on('open', () => {
    console.log("MongoDB Connected")
}).on("error", () => {
    console.log("MongoDb connection failed")
})

export default connection;

