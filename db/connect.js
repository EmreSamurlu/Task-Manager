const mongoose = require("mongoose");


  const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true, // we use these lines to get rid of deprecation errors.
  });
};

module.exports = connectDB;
