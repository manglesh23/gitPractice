console.log("server file");
const express = require("express");
const {router}=require('./authrouter/authrouter');
const { connectDatabase } = require("./databaseconnection/databaseconnect");
const app = express();
app.use(express.json());
app.use("/",router);

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Serevr creating" });
// });

connectDatabase()
  .then(() => {
    app.listen(5000, () => {
      console.log("listingign on the port 8000");
    });
  })
  .catch((e) => {
    console.log(e, "error failed to  connect");
  });
