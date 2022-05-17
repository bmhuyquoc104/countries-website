// Import express
const express = require("express");

// Import cors
const cors = require("cors");
const mongoose = require("mongoose");

// Declare app instance
const app = express();
require("dotenv").config();
// Middleware to overcome cors issues
app.use(cors());

//  Middleware to server static files
app.use(express.static("public"));

// Middleware to accept json request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
mongoose.connect(
  "mongodb+srv://bmhuyquoc104:Huy010400@cluster0.jg0zx.mongodb.net/test",
  { useNewUrlParser: true }
);

// Declare port and hostname for the server
const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

// Run the server
app.listen(PORT, HOSTNAME, () => {
  console.log(`listening on port: http://${HOSTNAME}:${PORT}`);
});

// Display message for home page
app.get("/", (req, res) => {
  res.send("This is backend server");
});
