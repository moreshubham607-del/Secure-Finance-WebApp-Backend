const accountService = require("./account.service");

const getProfile = (req, res) => {
  const profile = accountService.getProfile();
  res.json(profile);
};

const getBalance = (req, res) => {
  const balance = accountService.getBalance();
  res.json(balance);
};

const updateAccount = (req, res) => {
  const updated = accountService.updateAccount(req.body);
  res.json(updated);
};

const deactivateAccount = (req, res) => {
  const result = accountService.deactivateAccount();
  res.json(result);
};

module.exports = {
  getProfile,
  getBalance,
  updateAccount,
  deactivateAccount,
};
