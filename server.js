const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', bookRoutes);
app.use('/api', userRoutes);
app.use('/api', borrowRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
