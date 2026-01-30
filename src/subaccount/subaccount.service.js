const createSubaccount = (data) => {
  return {
    id: "sub_001",
    ...data,
    status: "active",
  };
};

const listSubaccounts = () => {
  return [
    { id: "sub_001", name: "Expenses", balance: 2.3 },
    { id: "sub_002", name: "Savings", balance: 5.1 },
  ];
};

const getSubaccount = (id) => {
  return {
    id,
    name: "Expenses",
    balance: 2.3,
  };
};

module.exports = {
  createSubaccount,
  listSubaccounts,
  getSubaccount,
};
