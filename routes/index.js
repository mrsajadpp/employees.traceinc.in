var express = require('express');
var router = express.Router();
let data = require('../database/data')

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home', description: 'Trace inc employees details' });
});

router.post('/search', (req, res, next) => {
  try {
    if (req.body.q) {
      data.findEmployee(req.body.q).then((data) => {
        console.log(data)
        res.render('employee', { title: data.name, description: data.name, data })
      }).catch((err) => { console.error(err) })
    } else {
      res.redirect('/')
    }
  } catch (err) {
    console.error(err)
  }
})

module.exports = router;
