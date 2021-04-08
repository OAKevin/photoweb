const User = require('../models/User');

exports.getIndex = async (req, res) => {
    const user = await User.find((data) => data);

    try {
        console.log(user);
        res.status(200).render('index', { user: user });
    } catch (error) {
        console.log(error);
    }
};

exports.getUser = async (req, res) => {
    const userId = req.params.userId;

    const user = await User.findById(userId, (user) => user);

    try {
        console.log(user);
        res.status(200).render('user', { user: user });
    } catch (error) {
        console.log(error);
    }
};

exports.getAddUser = (req, res) => {
    res.status(200).render('edit-user', { editing: false });
};

exports.getEditUser = async (req, res) => {
    const userId = req.params.userId;

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const user = await User.findById(userId);

    try {
        if (!userId) {
            return res.redirect('/');
        }
        console.log(user);
        res.status(200).render('edit-user', { user: user, editing: editMode });
    } catch (error) {
        console.log(error);
    }
};

exports.postUser = (req, res) => {
    const { name, image, description } = req.body;

    const user = new User({ name: name, image: image, description: description });
    user.save();
    console.log('User Added to the database');
    res.status(201).redirect('/');
};

exports.postEditUser = (req, res) => {
    const userId = req.body.userId;
    const { name, image, description } = req.body;

    User.findById(userId)
        .then((user) => {
            user.name = name;
            user.image = image;
            user.description = description;

            return user.save();
        })
        .then(() => {
            console.log('Item Updated');
            res.status(201).redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postDelete = async (req, res) => {
    const userId = req.body.userId;

    const user = await User.findByIdAndRemove(userId, (data) => data);

    try {
        console.log(user);
        console.log('Item Deleted');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};