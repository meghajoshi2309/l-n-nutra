// models/Product.js
const db = require('../config/database');

const Product = {
  getAll: (callback) => {
    db.query('SELECT * FROM Product', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Product WHERE ProductID = ?', [id], callback);
  },

  create: (product, callback) => {
    db.query(
      'INSERT INTO Product (Name, Description, Price, Tag, StockQuantity, ImageUrl) VALUES (?, ?, ?, ?, ?, ?)',
      [product.Name, product.Description, product.Price, product.Tag, product.StockQuantity, product.ImageUrl],
      callback
    );
  },

  update: (id, product, callback) => {
    db.query(
      'UPDATE Product SET Name = ?, Description = ?, Price = ?, Tag = ?, StockQuantity = ? WHERE ProductID = ?',
      [product.Name, product.Description, product.Price, product.Tag, product.StockQuantity, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Product WHERE ProductID = ?', [id], callback);
  }
};

module.exports = Product;