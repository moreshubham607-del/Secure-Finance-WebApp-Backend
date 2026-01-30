const subaccountService = require("./subaccount.service");

const createSubaccount = (req, res) => {
  const subaccount = subaccountService.createSubaccount(req.body);
  res.json(subaccount);
};

const listSubaccounts = (req, res) => {
  const list = subaccountService.listSubaccounts();
  res.json(list);
};

const getSubaccount = (req, res) => {
  const subaccount = subaccountService.getSubaccount(req.params.id);
  res.json(subaccount);
};

const freezeSubaccount = (req, res) => {
  res.json({ message: "Subaccount frozen" });
};

const unfreezeSubaccount = (req, res) => {
  res.json({ message: "Subaccount unfrozen" });
};

const deleteSubaccount = (req, res) => {
  res.json({ message: "Subaccount deleted" });
};

module.exports = {
  createSubaccount,
  listSubaccounts,
  getSubaccount,
  freezeSubaccount,
  unfreezeSubaccount,
  deleteSubaccount,
};
