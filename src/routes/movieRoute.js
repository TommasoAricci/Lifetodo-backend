const express = require("express");
const router = express.Router();
const { addMovie } = require("../controllers/movieController");
const { getMovies } = require("../controllers/movieController");
const { deleteMovie } = require("../controllers/movieController");
const { authenticateToken } = require("../middleware/authenticateToken");

router.post("/newmovie", authenticateToken, addMovie);
router.get("/allmovies", getMovies);
router.delete("/deletemovie/:id", deleteMovie);

module.exports = router;