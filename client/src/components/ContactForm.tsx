import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  onSubmit?: (formData: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // For demo purposes, just log the form data
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
            placeholder="Your name"
            required
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
            placeholder="Your email"
            required
          />
        </div>
        
        <div className="mb-6">
          <Label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</Label>
          <Textarea 
            id="message" 
            name="message" 
            rows={5} 
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
            placeholder="Your message"
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium">
          Send Message
        </Button>
      </form>
    </div>
  );
}
