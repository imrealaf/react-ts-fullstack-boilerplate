import express, { Request, Response } from "express";
import compression from "compression"; // compresses requests
import path from "path";

import userRoutes from "./routes/users";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(compression());
app.use(express.json());

// Serve any static files
// app.use(express.static(path.resolve(__dirname, "public")));

// Register routes
app.use("/api/users", userRoutes);

// Handle React routing, return all requests to React app in production
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

export default app;
