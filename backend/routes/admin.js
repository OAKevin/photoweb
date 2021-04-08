const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-user', adminController.getAddUser);

router.get('/edit-user/:userId', adminController.getEditUser);

router.post('/add-user', adminController.postUser);

router.post('/edit-user', adminController.postEditUser);

router.get('/:userId', adminController.getUser);

router.post('/delete', adminController.postUser);

module.exports = router;