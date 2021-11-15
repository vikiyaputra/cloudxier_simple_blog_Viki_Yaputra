const { Blog } = require(`../models/index`)

class BlogController {
  static createBlog(req, res) {
    const {
      title,
      author,
      content,
      url,
      favourite
    } = req.body
    Blog.create({title, author, content, url, favourite})
      .then((data)=> {
        res.status(201).json({
          message: "Blog successfully created",
          title: data.title,
          author: data.author,
          content: data.content,
          url: data.url,
          favourite: data.favourite
        })
      })
      .catch((err) => {
        console.log(err);
      }) 
  }

  static getBlogs(req, res) {
    Blog.findAll()
      .then( data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static findBlog(req, res) {
    Blog.findByPk(req.params.id)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static editBlog(req, res) {
    const {
      title,
      author,
      content,
      url
    } = req.body
    Blog.findByPk(req.params.id)
      .then(data => {
        if(!data) {
          res.status(404).json({message: "Blog not Found"})
        } else {
          return data.update({title, author, content, url})
        }
      })
      .then(data => {
        res.status(200).json({
          message: "Blog successfully updated!",
          title,
          author,
          url,
          updatedAt: data.updatedAt
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  static deleteBlog (req, res) {
    Blog.destroy({where: {id: req.params.id}})
      .then(data => {
        res.status(200).json({message: `Blog id ${req.params.id} successfully deleted`})
      })
      .catch(err => {
        console.log(err);
      })
  }
}

module.exports = BlogController