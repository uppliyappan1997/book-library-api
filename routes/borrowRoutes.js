const express = require('express');
const { borrowBook, returnBook, getBorrowRecords } = require('../controllers/borrowController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/borrow', authMiddleware, borrowBook);
router.post('/return', authMiddleware, returnBook);
router.get('/borrow', authMiddleware, getBorrowRecords);

module.exports = router;
