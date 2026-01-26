module.exports = (req, res, next) => {
  req.user = {
    userId: "user_123",
    walletAddress: "0xABC123"
  };
  next();
};
