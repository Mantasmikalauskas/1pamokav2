const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const path = require("path");

const app = express();
const PORT = 3000;

// Path to "database"
const DATA_FILE = path.join(__dirname, "data.json");

// Middleware
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Load DB
function readDB() {
  return fs.readJsonSync(DATA_FILE);
}
function writeDB(data) {
  fs.writeJsonSync(DATA_FILE, data, { spaces: 2 });
}

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

// GET all items
app.get("/api/items", (req, res) => {
  const items = readDB();
  res.json(items);
});

// GET by id
app.get("/api/items/:id", (req, res) => {
  const items = readDB();
  const item = items.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// (Later: POST/PUT/DELETE for editing)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
