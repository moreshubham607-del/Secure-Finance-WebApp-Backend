const express = require("express");
const app = express();

app.use(express.json());

const mockAuth = require("./middleware/mockAuth");

app.use(mockAuth);

app.use("/api/account", require("./account/account.routes"));
app.use("/api/subaccount", require("./subaccount/subaccount.routes"));
app.use("/api/transaction", require("./transaction/transaction.routes"));

module.exports = app;
