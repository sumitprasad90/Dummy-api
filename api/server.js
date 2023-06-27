const mongoose=require('mongoose')
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const dbfig=require('./db/database')
const createError=require('http-errors')
const app=express()

mongoose.Promise=global.Promise
mongoose.connect(dbfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('database is connected')
},error=>{
    console.log('data base is not connected',error)
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(cors())

const port=process.env.PORT ||3000
const server=app.listen(port,()=>{
    console.log('server is connected this:',port)
})
const Router=require('./router/userRouter')
app.use('/user',Router)
app.use((req,res,next)=>{
    next(createError(404))
})

app.get('/',(req,res)=>{
    res.send('invalid input')
})
app.use(function(err,req,res){
    if(!err.statusCode) err.statusCode=500
    res.status(err.statusCode).send(err.message)
})