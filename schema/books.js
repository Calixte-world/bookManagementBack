const mongoose = require ('mongoose')
const { Schema } = mongoose;

const bookSchema = new Schema({
    lienImage:{
        type: String,
        required : [true, " est obligatoire"],

    }, 
    titre:{
        type: String,
        required : [true, 'Le tire est obligatoire'],

    },
    auteur:{
        type: String,
        required : [true, "L'auteur est obligatoire"],

    },
    date: {
        type: Number,
        required: [true, 'La date de publication est obligatoire'],

    },
    genre: {
        type: String,
        required: [true, 'Le genre est obligatoire'],

    },
    type: String,

})

module.exports = mongoose.model('Book', bookSchema);