const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/news', (req, res, next) => {
  let data = {
    layout: false
  }
  res.render('spacex/spaceXnews', data);
});

module.exports = router;
