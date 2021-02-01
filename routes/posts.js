const express = require('express');

const Post = require('../models/Post');

const router = express.Router();

// gets all the post
router.get('/', (req, res) => {
  Post.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({ msg: err });
    });
});

// get back a specific post
router.get('/:id', (req, res) => {
  id = req.params.id;

  Post.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({ msg: err });
    });
});


// submit a post
router.post('/', (req, res) => {
  // console.log(req.body);
  const post = new Post(req.body);

  post.save()
    .then(data => res.status(200).json(data))
    .catch((err) => {
      res.status(404).json({ msg: err });
    });
});

// delete a specific post by id
router.delete('/:id', (req, res) => {
  id = req.params.id;
  Post.findByIdAndDelete(id)
    .then(result => {
      res.json({ msg: 'Deleted Succesfully', deleted: result });
    })
    .catch(err => {
      res.json({ msg: err });
    });
});

// update a specific post
router.patch('/:id', (req, res) => {
  id = req.params.id;
  Post.updateOne({ _id: id }, {
    $set: req.body
  })
    .then(result => {
      res.json({ msg: 'Updated Succesfully' });
    })
    .catch(err => {
      res.json({ msg: err });
    });
});


module.exports = router;

