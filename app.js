const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const todoRoutes = require('./src/routes/todoRoute');
const thoughtRoutes = require('./src/routes/thoughtRoute');
const userRoutes = require('./src/routes/userRoute');
const songRoutes = require('./src/routes/songRoute');
const bookRoutes = require('./src/routes/bookRoute');
const PORT = process.env.PORT || 4000;
const connectDB = require('./database');

app.use(express.json());

// CORS

const allowedOrigins = [
  'http://localhost:3000', 
  'http://localhost:4000', 
  "https://lifetodo-my.netlify.app",
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use("/api", todoRoutes, thoughtRoutes, userRoutes, songRoutes, bookRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = app;
