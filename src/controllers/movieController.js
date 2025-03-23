const Movie = require("../schemas/movie");
const User = require("../schemas/user");

exports.addMovie = async (req, res) => {
  try {
    const { title, image, id } = req.body;
    const userId = req.user.userId;

    const newMovie = new Movie({
      user: userId,
      title: title,
      image: image,
      refId: id
    });

    await newMovie.save();
    res.status(201).json(newMovie); // <-- Corretto
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
      .populate("user", "fullName username")
      .exec();
    res.status(200).json(movies); // <-- Corretto
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
