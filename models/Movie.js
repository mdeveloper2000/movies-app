const mongoose = require("mongoose")

const Movie = new mongoose.model("Movie", new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    cast: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    created_ad: {
        type: Date,
        required: true,
        default: Date.now
    }
}))

module.exports = Movie