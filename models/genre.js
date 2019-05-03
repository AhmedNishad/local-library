const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let GenreSchema = new Schema({
    
        name: {type:String, required:true, min:3, max:100}
})

// Virtual for url of Genre

GenreSchema.virtual('url').get(function(){
    return `/catalog/genre/${this._id}`
})



module.exports = mongoose.model('Genre', GenreSchema)