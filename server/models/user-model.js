const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

const UserData = new Schema(
    {   
        _id:{
            type:String,
            required:true
        },
        photo:{
            type:String,

        },
        username:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        googleid:{
            type:String,
            required:true,
        },
        secret:{
            type:String,
        },
        userFavorit:{
            type:Array,
        }

    },
    {timestamps:true},
)
UserData.plugin(passportLocalMongoose);
UserData.plugin(findOrCreate);

 const Users = new mongoose.model("Users",UserData)

module.exports = Users