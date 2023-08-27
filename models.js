const mongoose=require('mongoose');


const sampleSchema= mongoose.Schema({
    
    name:String,
    age:Number,
    email:String,
    password:String
},
{
    timestamps:true
}

);

const user=mongoose.model('user',sampleSchema);

module.exports=user;