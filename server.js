const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

// In-memory data store (no MongoDB)
const interns = [
  {
    _id: "1",
    name: "Your Name",
    role: "Frontend Intern",
    referralCode: "yourname2025",
    donations: 5000,
    status: "Active"
  }
];

// Routes

// Get all interns
app.get("/api/interns", (req, res) => {
  res.json(interns);
});

// Add intern
app.post("/api/interns", (req, res) => {
  const newIntern = {
    _id: String(Date.now()),
    name: req.body.name,
    role: req.body.role,
    referralCode: req.body.referralCode || "",
    donations: req.body.donations || 0,
    status: req.body.status || "Active"
  };
  interns.push(newIntern);
  res.status(201).json(newIntern);
});

// Delete intern
app.delete("/api/interns/:id", (req, res) => {
  const idx = interns.findIndex(i => i._id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  interns.splice(idx, 1);
  res.json({ message: "Deleted" });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));