const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => 
  Gig.findAll()
    .then(gigs => {
      res.send(gigs);
    })
    .catch(err => console.log(err)));

// Add a gig
router.post('/add', (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  
  // Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;