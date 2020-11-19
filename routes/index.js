var express = require('express');
var router = express.Router();

/* 登录 */
router.post('/login', function (req, res, next) {
  let { username, password } = req.body
  console.log(req);
  let { token } = req.headers
  console.log(token);
  console.log(username, password)
  res.send({ code: "0", isLogin: "ok", token: "abcdefg123456789", username })
});


router.get('/test', function (req, res) {
  // res.render('users/new', { title: 'New User'});
  res.send({ code: "0", result: { a: 0, b: 0 } })
});
router.get('/test1', function (req, res) {
  // res.render('users/new', { title: 'New User'});
  res.send({ code: "0", result: { a: 1, b: 1 } })
});
router.get('/test2', function (req, res) {
  // res.render('users/new', { title: 'New User'});
  res.send({ code: "0", result: { a: 2, b: 2 } })
});

module.exports = router;
