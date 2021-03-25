const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks.js');

// Create
router.post('/', (req, res) => {
    Bookmarks.create(req.body, (err, createdBookmark) => {
        res.json(createdBookmark);
    });
});

// Read
router.get('/', (req, res) => {
    Bookmarks.find({}, (err, foundBookmarks) => {
        res.json(foundBookmarks);
    });
});

// Update
router.put('/:id', (req, res) => {
    Bookmarks.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedBookmark) => {
            res.json(updatedBookmark);
        },
    );
});

// Delete
router.delete('/:id', (req, res) => {
    Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
        res.json(deletedBookmark);
    });
});

module.exports = router;
