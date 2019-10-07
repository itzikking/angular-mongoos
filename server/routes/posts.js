var express = require('express');
var router = express.Router();

const PostsSchema = require('../models/psots')
const AuthorSchema = require('../models/author')


//Get all
router.get('/', async (req, res, next) => {
  try {
    const postsSchema = await PostsSchema.find()
    res.json(postsSchema)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

//Get one
router.get('/:id', getPosts, (req, res, next) => {
  console.log('Get-one', res.postsSchema);
  res.json(res.postsSchema)
})

//Creating one
router.post('/', async (req, res, next) => {
  const postsSchema = new PostsSchema({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  })
  try {
    const newPosts = await postsSchema.save()
    res.status(201).json(newPosts)
    console.log('newPosts', newPosts);

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//Updating one
router.patch('/:id', getPosts, async (req, res, next) => {
  if (req.body.title != null) {
    res.postsSchema.title = req.body.title
  }
  if (req.body.body != null) {
    res.postsSchema.body = req.body.body
  }
  if (req.body.author != null) {
    res.postsSchema.author = req.body.author
  }
  try {
    const updatepostSchema = await res.postsSchema.save()
    res.json(updatepostSchema)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//Deleting one
router.delete('/:id', getPosts, async (req, res, next) => {
  try {
    await res.postsSchema.remove()
    res.json({ message: 'Post Deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getPosts(req, res, next) {
  let postsSchema
  try {
    postsSchema = await PostsSchema.findById(req.params.id)
    if (postsSchema == null)
      return res.status(404).json({ message: 'Cannot find subsriber' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.postsSchema = postsSchema
  next()
}
module.exports = router;
