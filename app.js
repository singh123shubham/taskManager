const connectDB = require('./database/dbconnection')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks-Routes')
const dotenv = require('dotenv').config()
const notFound = require('./middleware/notfound')
const errorHandlerMiddlerware = require('./middleware/error-handler')

//middleware
app.use(express.json())
app.use(express.static('./public'))

//routes
// app.get('/hello',(req,res)=>{
//     res.send('Task Manager')
// })

app.use('/api/v1/tasks',tasks)

app.use(notFound)

app.use(errorHandlerMiddlerware)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is running port ${port}....`))

    }catch(error){

    }
}

start()

const port = 4000



