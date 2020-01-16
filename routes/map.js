const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/map', (req, res, next) => {
  let data = {
    layout: false
  }
  res.render('spacex/spacex-map', data);
});

module.exports = router;
