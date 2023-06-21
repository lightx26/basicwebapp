const express = require("express");
const dishesController = require("../controllers/dishes.controller.js");
const router = express.Router();

router.get("/", dishesController.getAllDishes);
router.get("/search", dishesController.findDishes)

module.exports = router;