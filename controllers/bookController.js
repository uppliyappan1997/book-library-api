const Book = require('../models/Book');

// Add new book
exports.addBook = async (req, res) => {
  const { title, author, ISBN, publishYear, genre } = req.body;
  const book = new Book({ title, author, ISBN, publishYear, genre });
  await book.save();
  res.status(201).json({ message: 'Book added', book });
};

// Get all books with filters
exports.getBooks = async (req, res) => {
  const { author, genre, year } = req.query;
  const query = {};
  if (author) query.author = author;
  if (genre) query.genre = genre;
  if (year) query.publishYear = year;
  
  const books = await Book.find(query);
  res.json(books);
};

// Get book by ID
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// Update book details
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'Book updated', book });
};

// Delete book
exports.deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'Book deleted' });
};

