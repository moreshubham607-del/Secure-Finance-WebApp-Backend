const express = require("express");
const router = express.Router();

const accountController = require("./account.controller");

router.get("/profile", accountController.getProfile);
router.get("/balance", accountController.getBalance);
router.put("/update", accountController.updateAccount);
router.delete("/deactivate", accountController.deactivateAccount);

module.exports = router;
