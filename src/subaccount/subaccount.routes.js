const express = require("express");
const router = express.Router();

const subaccountController = require("./subaccount.controller");

router.post("/create", subaccountController.createSubaccount);
router.get("/", subaccountController.listSubaccounts);
router.get("/:id", subaccountController.getSubaccount);
router.post("/:id/freeze", subaccountController.freezeSubaccount);
router.post("/:id/unfreeze", subaccountController.unfreezeSubaccount);
router.delete("/:id", subaccountController.deleteSubaccount);

module.exports = router;
