import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Local JSON "database" file (renamed from data.json -> db.json)
const DATA_FILE = path.join(__dirname, "db.json");

// Middleware & view engine
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// --- DB helpers ---
async function ensureDB() {
  if (!(await fs.pathExists(DATA_FILE))) {
    const seed = [
      { id: "10001", name: "Stabdžių diskas", manufacturer: "Audi", price: 120.00, quantity: 5 },
      { id: "10002", name: "Oro filtras", manufacturer: "Volkswagen", price: 25.50, quantity: 12 },
      { id: "10003", name: "Alyvos filtras", manufacturer: "BMW", price: 15.99, quantity: 20 }
    ];
    await fs.writeJSON(DATA_FILE, seed, { spaces: 2 });
  }
}
async function readDB() {
  if (!(await fs.pathExists(DATA_FILE))) return [];
  return fs.readJSON(DATA_FILE);
}
async function writeDB(data) {
  return fs.writeJSON(DATA_FILE, data, { spaces: 2 });
}

// --- Routes ---

// Home: render and pass full items list (so dropdown can be server-rendered)
app.get("/", async (req, res) => {
  try {
    const items = await readDB();
    res.render("home", { items });
  } catch (err) {
    res.status(500).send("Klaida serverio pusėje");
  }
});

// GET all (api)
app.get("/api/items", async (req, res) => {
  try {
    res.json(await readDB());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET by id OR name OR manufacturer (query param ?query=)
app.get("/api/items/search", async (req, res) => {
  try {
    const q = (req.query.query || "").toString().trim();
    if (!q) return res.status(400).json({ error: "Reikalingas ?query parametras" });
    const items = await readDB();
    const results = items.filter(
      i =>
        i.id === q ||
        (i.name && i.name.toLowerCase().includes(q.toLowerCase())) ||
        (i.manufacturer && i.manufacturer.toLowerCase().includes(q.toLowerCase()))
    );
    if (!results.length) return res.status(404).json({ error: "Nerasta" });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new item
app.post("/api/items", async (req, res) => {
  try {
    const { id, name, manufacturer, price, quantity } = req.body;

    // validation: id must be 5 digits
    if (!id || !/^\d{5}$/.test(String(id))) {
      return res.status(400).json({ error: "ID turi būti 5 skaitmenys" });
    }
    if (!name || !manufacturer) {
      return res.status(400).json({ error: "Trūksta pavadinimo arba gamintojo" });
    }

    const items = await readDB();
    if (items.some(i => i.id === String(id))) {
      return res.status(400).json({ error: "Toks ID jau egzistuoja" });
    }

    const newItem = {
      id: String(id),
      name: String(name),
      manufacturer: String(manufacturer),
      price: Number(parseFloat(price || 0).toFixed(2)),
      quantity: parseInt(quantity || 0, 10)
    };

    items.push(newItem);
    await writeDB(items);
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update by id
app.put("/api/items/:id", async (req, res) => {
  try {
    const items = await readDB();
    const idx = items.findIndex(i => i.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Nerasta" });

    const { name, manufacturer, price, quantity } = req.body;
    if (name !== undefined) items[idx].name = String(name);
    if (manufacturer !== undefined) items[idx].manufacturer = String(manufacturer);
    if (price !== undefined) items[idx].price = Number(parseFloat(price).toFixed(2));
    if (quantity !== undefined) items[idx].quantity = parseInt(quantity, 10);

    await writeDB(items);
    res.json(items[idx]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE by id
app.delete("/api/items/:id", async (req, res) => {
  try {
    const items = await readDB();
    const remaining = items.filter(i => i.id !== req.params.id);
    if (remaining.length === items.length) return res.status(404).json({ error: "Nerasta" });
    await writeDB(remaining);
    res.json({ message: "Ištrinta" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server after ensuring DB exists
await ensureDB();
app.listen(PORT, () => console.log(`Serveris veikia: http://localhost:${PORT}`));
