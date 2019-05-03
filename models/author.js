const mongoose = require('mongoose')
const moment = require('moment')

let Schema = mongoose.Schema;

let AuthorSchema = Schema({
        first_name: {type: String, required: true, max:100},
        family_name: {type: String, required: true, max:100},
        date_of_birth: {type:Date},
        date_of_death: {type:Date},
    
})

// Virtual for authors full name

AuthorSchema.virtual('name').get(function(){
    return `${this.family_name} , ${this.first_name}`
})

// Virtual for author's Date of Birth

AuthorSchema.virtual('year_birth').get(function(){
    return moment(this.date_of_birth).format('MMMM Do, YYYY')
})

AuthorSchema.virtual('year_death').get(function(){
    return moment(this.date_of_death).format('MMMM Do, YYYY')
})

// Virtual for Author's url

AuthorSchema.virtual('url').get(function(){
    return `/catalog/author/${this._id}`
})

module.exports = mongoose.model('Author', AuthorSchema)