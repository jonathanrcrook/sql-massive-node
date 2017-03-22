const db = require('./index.js')
module.exports = {

  Create: function(req, res, next) {
    db.create_product([req.body.name, req.body.description,
      req.body.price, req.body.imageurl],
      function(err, products) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
      return res.status(200).json(products)
    })
  },

  GetOne: function(req, res, next) {
    db.read_product([req.params.id], function (err, oneProduct) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
      return res.status(200).json(oneProduct)
    })
  },

  GetAll: function(req, res, next) {
    db.read_products([], function (err, allProducts) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
        return res.status(200).json(allProducts)
    })
  },

  Update: function(req, res, next) {
    db.update_product([req.body.id, req.body.description], function(err, updateProduct) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
        return res.status(200).json(updateProduct)
    })
  },

  Delete: function(req, res, next) {
    db.delete_product([req.body.id], function(err, deleteProduct) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
        return res.status(200).json(deleteProduct)
    })
  }

}
