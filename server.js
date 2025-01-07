import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Resolve __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes for different HTML files
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
