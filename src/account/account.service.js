const getProfile = () => {
  return {
    id: "user_123",
    name: "Demo User",
    wallet: "0xABC123",
  };
};

const getBalance = () => {
  return {
    balance: 10.5,
    currency: "ETH",
  };
};

const updateAccount = (data) => {
  return {
    message: "Account updated successfully",
    updatedData: data,
  };
};

const deactivateAccount = () => {
  return {
    message: "Account deactivated",
  };
};

module.exports = {
  getProfile,
  getBalance,
  updateAccount,
  deactivateAccount,
};
