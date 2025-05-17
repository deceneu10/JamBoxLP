import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - prefix with /api
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact form submission endpoint (demo only - no actual storage)
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // In a real app, you would store this data or send an email
    // For demo purposes, just return success
    res.json({ 
      success: true, 
      message: "Thank you for your message. We'll be in touch soon!" 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
