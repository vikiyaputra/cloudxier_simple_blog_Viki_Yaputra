const express = require('express')
const router = express.Router()
const BlogController = require('../controllers/BlogController')

router.post('/', BlogController.createBlog)
router.get('/', BlogController.getBlogs)
router.get('/:id', BlogController.findBlog)
router.patch('/:id', BlogController.editBlog)
router.delete('/:id', BlogController.deleteBlog)

module.exports = router