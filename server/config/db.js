const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://BSONTAKKE:ozGB2V1fCJKbm04A@cluster0.lbdnmii.mongodb.net/Ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}