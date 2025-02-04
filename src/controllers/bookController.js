const Book = require("../schemas/book");
const User = require("../schemas/user");

exports.addBook = async (req, res) => {
  try {
    const { title, author, description, image, id } = req.body;
    const userId = req.user.userId;

    const newBook = new Book({
      user: userId,
      title: title,
      author: author,
      description: description,
      image: image,
      refId: id
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate("user", "fullName username")
      .exec();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
