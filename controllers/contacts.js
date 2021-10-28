const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json(await Contact.find({}));
    } catch (error) {
        res.status(401).json({message: 'Please login to see contacts'});
    }
});

router.post('/', async (req, res) => {
    try {
        res.json(await Contact.create(req.body));
    } catch (error) {
        res.status(401).json({message: 'Please login to create a contact'});
    }
});

module.exports = router;