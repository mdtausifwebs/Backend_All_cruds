const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.DBURL)
    .then((data) => {
      console.log(`connect databse ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`not connect database ${err}`);
    });
};
mongoose.set("strictQuery", false);
module.exports=db