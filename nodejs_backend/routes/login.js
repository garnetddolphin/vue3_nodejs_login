const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  if(req.body.id == 'test' && req.body.pass == 'test'){
    res.send({
      message: 'OK'
    })
  } else {
    res.send({
      message: '認証エラー'
    })
  }
})

modele.exports = router;