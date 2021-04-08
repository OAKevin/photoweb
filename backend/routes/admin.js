const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-user', adminController.getAddUser);

router.post('/add-user', adminController.postUser);

module.exports = router;