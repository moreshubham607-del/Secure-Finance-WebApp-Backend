const express = require("express");
const router = express.Router();

const controller = require("./transaction.controller");

router.post("/initiate", controller.initiate);
router.get("/history", controller.history);

module.exports = router;
