const express = require('express');
const routes = express.Router();
const db = require('../db');

routes.get('/', (req, res) => {
  let coll = db.get().collection('robots');

  coll.find({}).toArray((err, robots) => {
    res.render('home', { users: robots });
  });
});

module.exports = routes;
