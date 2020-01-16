const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/missions', (req, res, next) => {
  let data = {
    layout: false
  }
  res.render('spacex/spaceXmissions', data);
});

module.exports = router;
