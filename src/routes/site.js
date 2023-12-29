const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteControllers');

// newsController.index
router.get('/search', siteController.search);
router.get('/', siteController.home);
router.get('/signup', siteController.signup);
router.get('/login', siteController.login);




module.exports = router;
