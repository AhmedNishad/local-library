const mongoose = require('mongoose')
const moment = require('moment')
let Schema = mongoose.Schema;

let BookInstanceSchema = new Schema({
    
        book: {type: Schema.Types.ObjectId, ref:'Book', required:true},
        imprint: {type:String, required:true},
        status: {type:String, enum:['Maintenance', 'Available', 'Loaned','Reserved'], default:'Maintenance', required:true},
        due_back: {type:Date, default:Date.now}    
})

// Virtual for url of book Instance

BookInstanceSchema.virtual('url').get(function(){
    return `/catalog/bookinstance/${this._id}`
})

BookInstanceSchema.virtual('due_back_formatted').get(function(){
    return moment(this.due_back).format('MMMM Do, YYYY')
})


module.exports = mongoose.model('BookInstance', BookInstanceSchema)