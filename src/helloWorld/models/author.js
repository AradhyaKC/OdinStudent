const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const authorSchema = new Schema({
    first_name:{type:String, maxLength:100, minLength:0}, 
    family_name:{type:String, maxLength:100, minLength:0}, 
    date_of_birth :{type:Date}, 
    date_of_Death:Date, 
});

authorSchema.virtual('name').get(function(){
    let fullName ='';
    if(this.first_name && this.family_name){
        fullName = `${this.first_name} ${this.family_name}`;
    }
    return fullName;
});

authorSchema.virtual('url', function(){
    return `catalog/author/${this._id}`;
});


module.exports= mongoose.model('Author',authorSchema);
