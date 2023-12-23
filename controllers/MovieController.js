const Movie = require("../models/Movie")

const movies_latest = async (req, res) => {
    try {
        const movies = await Movie.find({}).sort({year: 'desc'}).limit(6)
        res.render("index", { title: "Home", movies })
    }
    catch(error) {
        console.log(error)
    }
}

const movies_search = async (req, res) => {
    const search = req.params.search    
    const movies = await Movie.find({ title: new RegExp(search, 'i') }).limit(8)        
    res.send(movies)
}

const movie_get = async(req, res) => {    
    try {
        const movie = await Movie.findById({_id: req.params.id})
        const moviecast = movie.cast.split(",")
        const protagonist = moviecast[0]
        const movies = await Movie.find({ cast: new RegExp(protagonist, 'i') }).limit(12)
        let suggestions = movies.filter(movie => movie._id != req.params.id)
        if(suggestions.length === 0) {
            suggestions = await Movie.find({}).sort({year: 'desc'}).limit(6)
        }
        res.render("movie", { title: "Movie Details", movie, suggestions })
    }
    catch(error) {
        console.log(error)
    }    
}

module.exports = {
    movies_latest,
    movies_search,
    movie_get    
}