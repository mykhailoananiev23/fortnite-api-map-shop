const router = require("express").Router();

const apiController = require('../controller/apiController');

router.get('/shop', apiController.getShopInfo)

module.exports = router;
