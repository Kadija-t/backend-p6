const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const booksCtrl = require('../controllers/books');

router.post('/', auth, multer, booksCtrl.createBook);
router.get('/', booksCtrl.getAllBooks);
router.get('/bestrating', booksCtrl.getBestRating);
router.get('/:id', booksCtrl.getOneBook);

router.put('/:id', auth, multer, booksCtrl.modifyBook);
router.post('/:id/rating', auth, booksCtrl.rateAndGetAverageRating);
router.delete('/:id', auth, booksCtrl.deleteBook);


module.exports = router;
