const express = require("express");
const itemController = require("../controller/itemController");
const router = express.Router();

router.post("/addProduct", itemController.createProduct);
router.get("/getAllProducts", itemController.getAllProducts);

module.exports = router;
