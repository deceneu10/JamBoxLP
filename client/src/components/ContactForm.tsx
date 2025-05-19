import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { getRandomMessage, successMessages, errorMessages } from "@/lib/contactMessages";

interface ContactFormProps {
  onSubmit?: (formData: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    establishmentName: "",
    establishmentType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    setIsSubmitting(true);
    
    try {
      // Use the browser's fetch API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Show success toast with a random fun message
        toast({
          title: "Message Sent!",
          description: getRandomMessage(successMessages),
          variant: "default",
          duration: 5000,
        });
        
        // Reset form
        setFormData({ name: "", email: "", establishmentName: "", establishmentType: "", message: "" });
      } else {
        // Show error toast with a random fun message
        toast({
          title: "Message Failed",
          description: getRandomMessage(errorMessages),
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error toast with a random fun message
      toast({
        title: "Message Failed",
        description: getRandomMessage(errorMessages),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-gray-800 p-8">
      <h3 className="text-2xl font-bold mb-6 text-foreground">Have a bar, pub or gym? Let the music bring you clients and revenue!</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name" className="block text-foreground font-medium mb-2">Name of contact</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
            placeholder="Your name"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="establishmentName" className="block text-foreground font-medium mb-2">Name of establishment</Label>
          <Input 
            type="text" 
            id="establishmentName" 
            name="establishmentName" 
            value={formData.establishmentName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
            placeholder="Your establishment name"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="establishmentType" className="block text-foreground font-medium mb-2">Type of establishment</Label>
          <select
            id="establishmentType"
            name="establishmentType"
            value={formData.establishmentType}
            onChange={handleSelectChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            required
            disabled={isSubmitting}
          >
            <option value="">Please select your establishment...</option>
            <option value="Pub">Pub</option>
            <option value="Bar">Bar</option>
            <option value="Gym">Gym</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="mb-4">
          <Label htmlFor="email" className="block text-foreground font-medium mb-2">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
            placeholder="Your email"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-6">
          <Label htmlFor="message" className="block text-foreground font-medium mb-2">Message</Label>
          <Textarea 
            id="message" 
            name="message" 
            rows={5} 
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
            placeholder="Your message"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
