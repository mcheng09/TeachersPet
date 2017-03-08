var express = require('express');
var knex = require('../models/database');
var router = new express.Router();

// Index of all lectures
router.get('/api/lectures', function(req, res) {
  knex('lectures')
    .select()
    .then(function(data) {
      res.json({
        data:data
      })
    })
})

// Creating a new lecture
router.post('/api/lectures/new', function(req, res) {
  knex('lectures')
    .returning(['id', 'lecture_name', 'lecture_professor', 'lecture_time', 'lecture_location'])
    .insert({
      lecture_name: req.body.lecture_name,
      lecture_professor: req.body.lecture_professor,
      lecture_time: req.body.lecture_time,
      lecture_location: req.body.lecture_location
    })
    .then(function(data){
      res.json({
        data: data
      })
    })
})



module.exports = router;
