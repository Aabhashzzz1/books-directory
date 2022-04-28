const router = require('express').Router();

const booksData = require('./data.json');

/* Getting all the books data */
router.get('/', (req,res) => {
    res.json(booksData);
});

/* Getting only one or specific books data by id */
router.get('/:id', (req,res) => {
    const { id } = req.params;
    res.json(booksData.filter((ele) => ele.id === parseInt(id)));
});

/* Posting books data in json file/format */
router.post('/', (req,res) => {
    const info = req.body;
    console.log(info);
    booksData.push(info);
    res.json({ message: 'The book has been uploaded.' });
});

/* Putting/Updating books data in json file */
router.put('/:id', (req,res) => {
    const { id } = req.params;
    const info = req.body;
    console.log(info);
    booksData.forEach((book, index) => {
        if (book.id === parseInt(id)) {
            booksData[index] = info;
        }
    });
    res.json({ message: `The book data with id ${id} has been updated` });
});

/* Deleting only one or specific books data by id */
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    booksData.forEach((book, index) => {
        if (book.id === parseInt(id)) {
            booksData.splice(index);
        }
    });
    console.log(booksData);
    res.json({ message: `The book data with id ${id} has been deleted` });
});

module.exports = router;