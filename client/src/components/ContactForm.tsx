import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { getRandomSuccessMessage, getRandomErrorMessage } from "@/lib/contactMessages";
import { useLanguage } from "@/lib/LanguageContext";

interface ContactFormProps {
  onSubmit?: (formData: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    establishmentName: "",
    establishmentType: "",
    message: ""
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      toast({
        title: t("contact.gdpr.errorTitle"),
        description: t("contact.gdpr.errorMessage"),
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    
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
          title: t("contact.success.title"),
          description: getRandomSuccessMessage(language),
          variant: "default",
          duration: 5000,
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", establishmentName: "", establishmentType: "", message: "" });
        setGdprConsent(false);
      } else {
        // Show error toast with a random fun message
        toast({
          title: t("contact.error.title"),
          description: getRandomErrorMessage(language),
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error toast with a random fun message
      toast({
        title: t("contact.error.title"),
        description: getRandomErrorMessage(language),
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
      <h3 className="text-2xl font-bold mb-6 text-foreground">{t("contact.title")}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name" className="block text-foreground font-medium mb-2">{t("contact.name.label")}</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
            placeholder={t("contact.name.placeholder")}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="establishmentName" className="block text-foreground font-medium mb-2">{t("contact.establishmentName.label")}</Label>
          <Input 
            type="text" 
            id="establishmentName" 
            name="establishmentName" 
            value={formData.establishmentName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
            placeholder={t("contact.establishmentName.placeholder")}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="establishmentType" className="block text-foreground font-medium mb-2">{t("contact.establishmentType.label")}</Label>
          <select
            id="establishmentType"
            name="establishmentType"
            value={formData.establishmentType}
            onChange={handleSelectChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            required
            disabled={isSubmitting}
          >
            <option value="">{t("contact.establishmentType.placeholder")}</option>
            <option value="Pub">{t("contact.establishmentType.pub")}</option>
            <option value="Bar">{t("contact.establishmentType.bar")}</option>
            <option value="Gym">{t("contact.establishmentType.gym")}</option>
            <option value="Other">{t("contact.establishmentType.other")}</option>
          </select>
        </div>
        
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-2">
              <Label htmlFor="email" className="block text-foreground font-medium mb-2">{t("contact.email.label")}</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                placeholder={t("contact.email.placeholder")}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="md:col-span-1 flex items-center justify-center">
              <span className="text-gray-400 font-medium">{t("contact.or")}</span>
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="phone" className="block text-foreground font-medium mb-2">{t("contact.phone.label")}</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                placeholder={t("contact.phone.placeholder")}
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <Label htmlFor="message" className="block text-foreground font-medium mb-2">{t("contact.message.label")}</Label>
          <Textarea 
            id="message" 
            name="message" 
            rows={5} 
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
            placeholder={t("contact.message.placeholder")}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-6">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="gdprConsent" 
              checked={gdprConsent}
              onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
              disabled={isSubmitting}
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="gdprConsent" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                <span dangerouslySetInnerHTML={{ __html: t("contact.gdpr.consent") }} />
              </Label>
            </div>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("contact.button.sending") : t("contact.button.send")}
        </Button>
      </form>
    </div>
  );
}
