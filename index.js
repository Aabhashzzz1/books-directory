const express = require('express');
const PORT = 8000;
const books = require('./src/books');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/books', books);

app.listen(PORT, () => {
    console.log(`Starting server at port ${PORT}`);
});