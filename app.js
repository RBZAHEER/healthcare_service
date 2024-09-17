const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const serviceRoutes = require("./routes/serviceRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Healthcare Services API!");
});
// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/services", serviceRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
