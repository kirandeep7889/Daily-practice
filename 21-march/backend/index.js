const express = require("express");
const mongoose = require("mongoose");
const rootRoute = require("./routes/rootRoute");
const app = express(); 
require("dotenv").config();
const db_url = "mongodb+srv://skirandeep999:Kirandeep7889@cluster0.hqrjaa0.mongodb.net/userVerify";
const cors=require("cors")
const port = 3000;

app.use(express.json());
app.use(cors())
app.use("/api/v1", rootRoute);

mongoose.connect(db_url)
  .then(() => {
    console.log("Successfully connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);

  });
