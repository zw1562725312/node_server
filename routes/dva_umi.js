var express = require('express');
var router = express.Router();

/* 登录 */
router.post('/login', function (req, res, next) {
  let { username, password } = req.body
  let { token } = req.headers
  console.log(token);
  console.log(username, password)
  res.send({ code: "200", })
});


router.get('/loginStatus', function (req, res) {
  // res.render('users/new', { title: 'New User'});
  res.send({ code: "200", result: { a: 0, b: 0 } })
});

router.get('/test', function (req, res) {
  // res.render('users/new', { title: 'New User'});
  res.send({ code: "200", result: { a: 0, b: 0 } })
});


module.exports = router;
