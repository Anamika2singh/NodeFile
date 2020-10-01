const mongoose= require('mongoose');
var Schema=mongoose.Schema;

var myuser=new Schema({
    fname : String,
    lname :String,
    email : String,
    mobile : String,
    arrivaltime:String,
    departuret:String,
    date:String
});
module.exports = mongoose.model('users',myuser); 