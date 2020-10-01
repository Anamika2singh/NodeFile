
const { schema } = require('./user');

const mongoose= require('mongoose');
var Schema=mongoose.Schema;


var fill=new  Schema({
  user_id:{type: Schema.Types.ObjectId},
  arrivaltime:{type:String},
  departuret:{type:String},
  date:{type:String}
});
module.exports=mongoose.model('fillattends',fill);