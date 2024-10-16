const express = require('express');
const { addBook, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/books', authMiddleware, addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', authMiddleware, updateBook);
router.delete('/books/:id', authMiddleware, deleteBook);

module.exports = router;
