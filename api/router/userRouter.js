const express=require('express')
const app=express()
const userSchema=require('../model/userSchema')
const userRouter=express.Router()

userRouter.route('/').get((req,res)=>{
    userSchema.find().then((data)=>{
        console.log(data)
        res.json(data)
    })
})

userRouter.route('/user/:id').get((req,res)=>{
    userSchema.findById(req.params.id).then((data)=>{
        console.log(data)
        res.json(data)
    })
})

userRouter.route('/add-user').post((req,res)=>{
    userSchema.create(req.body).then((data)=>{
        console.log(data)
        res.json(data)
    })
})


module.exports=userRouter