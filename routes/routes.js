const { Router } = require("express")
const movieController = require("../controllers/MovieController")

const router = Router()

router.get("/", movieController.movies_latest)
router.get("/movies/:search", movieController.movies_search)
router.get("/movie/:id", movieController.movie_get)

module.exports = router