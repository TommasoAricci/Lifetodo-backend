const express = require("express");
const router = express.Router();
const { addBook } = require("../controllers/bookController");
const { getBooks } = require("../controllers/bookController");
const { deleteBook } = require("../controllers/bookController");
const { authenticateToken } = require("../middleware/authenticateToken");

router.post("/newbook", authenticateToken, addBook);
router.get("/allbooks", getBooks);
router.delete("/deletebook/:id", deleteBook);

module.exports = router;