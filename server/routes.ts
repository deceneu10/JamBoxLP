import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - prefix with /api
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact form submission endpoint with real email sending
  app.post("/api/contact", async (req, res) => {
    const { name, email, establishmentName, establishmentType, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !establishmentName || !establishmentType || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    try {
      // Send email via SendGrid
      const success = await sendContactEmail({ name, email, establishmentName, establishmentType, message });
      
      if (success) {
        return res.json({ 
          success: true, 
          message: "Thank you for your message. We'll be in touch soon!" 
        });
      } else {
        return res.status(500).json({ 
          success: false, 
          message: "Failed to send your message. Please try again later." 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred while sending your message." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
