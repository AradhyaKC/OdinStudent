const mongoose = require('mongoose');
const luxon = require('luxon');
const { DateTime } = require('luxon');
const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema({
    book: {type:Schema.Types.ObjectId, ref:'Book', required:true}, 
    imprint: { type: String, required: true },
    status:{type:String, 
    enum:['Available', 'Maintenance', 'Loaned', 'Reserved'],
    required:true,  default:'Maintenance', }, 
    due_back: {type:Date, default:Date.now()}, 
});

bookInstanceSchema.virtual("url").get(function () {
 // We don't use an arrow function as we'll need the this object
 return `/catalog/bookinstance/${this._id}`;
});
bookInstanceSchema.virtual('due_back_formatted').get(function (){
    return luxon.DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

const Book = mongoose.model('BookInstance',bookInstanceSchema);
module.exports =Book;