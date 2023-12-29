const express = require('express');
const router = express.Router();

const NewsControllers = require('../app/controllers/NewsControllers');

// newsController.index
router.get('/:slug', NewsControllers.show);
router.get('/', NewsControllers.index);

module.exports = router;
