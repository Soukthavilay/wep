const router = require('express').Router()
const helloctrl = require("../controllers/HelloCtrl")

router.route('/hello').get(helloctrl.getHello)

module.exports = router