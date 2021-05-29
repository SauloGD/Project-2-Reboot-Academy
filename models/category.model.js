const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryType : {
        type : String,
        enum : ['hotel', 'stadiums', 'theaters', 'party', 'cinema', 'gyms', 'restaurants']
    },
    tags : {
        type : Array,
        require : [true, 'You have to put at least one tag']
    },
    description : {
        type : String,
        require : [true, 'Description is required']
    }

})


const categoryModel = mongoose.model('category', categorySchema)
module.exports = {categoryModel, categorySchema}