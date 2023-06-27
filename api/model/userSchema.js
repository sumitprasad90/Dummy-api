const mongoose=require('mongoose')
const Schema=mongoose.Schema
let userSchema=new Schema({
    Major_Tech_Stack:{
        type:String,
        required:true
    },
    Name:{
        type:String
    },
    academy_name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    passing_year:{
        type:Number,
        required:true
    },
    exp_yr:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    }

},
{collection:'emploiesData'}
)
module.exports=mongoose.model('userSchema',userSchema)