const Borrow = require('../models/Borrow');

// Borrow a book
exports.borrowBook = async (req, res) => {
  const { userID, bookID } = req.body;
  const borrow = new Borrow({ user: userID, book: bookID });
  await borrow.save();
  res.status(201).json({ message: 'Book borrowed', borrow });
};

// Return a borrowed book
exports.returnBook = async (req, res) => {
  const { userID, bookID } = req.body;
  const borrow = await Borrow.findOne({ user: userID, book: bookID });
  if (!borrow) return res.status(404).json({ message: 'Borrow record not found' });

  borrow.returnDate = new Date();
  await borrow.save();
  res.json({ message: 'Book returned', borrow });
};

// Get all borrow records
exports.getBorrowRecords = async (req, res) => {
  const borrows = await Borrow.find().populate('user book');
  res.json(borrows);
};
