import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import dotenv from 'dotenv'
import mongoose, { Mongoose } from 'mongoose'

dotenv.config()
 const PORT= process.env.PORT
const MONGO_URI=process.env.MONGO_URI

const app =express()

app.bodyParser(urlencoded, {extended:true})
app.express(urlencoded, {extended:true})
app.use(express().json())
app.use(bodyParser.json())


mongoose.connect(MONGO_URI)

  .then(()=> console.log("connected to the database"))
  .catch(err => console.log("connection error", err))


app.listen(PORT, ()=>{
    console.log(`conntected to port ${PORT}`)
})