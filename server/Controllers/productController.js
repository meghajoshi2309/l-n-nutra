// controllers/ProductController.js
const Product = require('../Models/Product');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).send(results);
    }
  });
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, results) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else if (results.length === 0) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.status(200).send(results[0]);
    }
  });
};

exports.createProduct = (req, res) => {
  const product = req.body;
  Product.create(product, (err, results) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(201).send({ message: 'Product created', id: results.insertId });
    }
  });
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const product = req.body;
  Product.update(id, product, (err, results) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else if (results.affectedRows === 0) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.status(200).send({ message: 'Product updated' });
    }
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.delete(id, (err, results) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else if (results.affectedRows === 0) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.status(200).send({ message: 'Product deleted' });
    }
  });
};