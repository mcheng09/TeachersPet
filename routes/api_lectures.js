var express = require('express');
var knex = require('../models/database');
var router = new express.Router();

router.get('/api/lectures', function(req, res) {
  knex('lectures')
    .select()
    .then(function(data) {
      res.json({
        data:data
      })
    })
})

module.exports = router;
