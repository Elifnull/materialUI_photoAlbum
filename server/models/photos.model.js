const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "art without accreditation is saddness"],
        minlength: [4, "More than 3 character are needed for a good plot"]
    },
    picture: {
        type: String,
        required: [true, "art is pictures in this case"]
    }
},{ timestamps: true});

const Photo = mongoose.model("Photo",PhotoSchema);

module.exports = Photo;