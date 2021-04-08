const User = require('../models/User');

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

exports.getAddUser = (req, res) => {
    res.status(200).render('edit-user');
};

exports.postUser = (req, res) => {
    const { name, image, description } = req.body;

    const user = new User({ name: name, image: image, description: description });
    user.save();
    console.log('User Added to the database');
    res.status(201).redirect('/');
};