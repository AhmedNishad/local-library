const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let BookSchema = Schema({

    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
    
})



// Virtual for url of book

BookSchema.virtual('url').get(function(){
    return `/catalog/book/${this._id}`
})



module.exports = mongoose.model('Book', BookSchema)