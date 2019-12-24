var express = require('express');
var router = express.Router();

/* 登录 */
router.post('/checkLogin', function (req, res, next) {
  let { username, password } = req.body
  // console.log(req);
  let { token } = req.headers
  console.log(token);
  console.log(username, password)
  res.send({ code: "200", isLogin: "ok", token: "abcdefg123456789", username })
});

module.exports = router;
