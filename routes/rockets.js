const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/rockets', (req, res, next) => {
  let data = {
    layout: false
  }
  res.render('spacex/spaceXrockets', data);
});

module.exports = router;
