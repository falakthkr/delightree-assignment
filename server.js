const express = require("express");
const mongoose = require("mongoose");
const statsRoutes = require("./routes/statsRoutes");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/api-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());

// Routes
app.use("/api/stats", statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
