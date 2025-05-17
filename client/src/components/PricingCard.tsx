import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  highlighted?: boolean;
  borderColor?: string;
}

export default function PricingCard({
  name,
  description,
  price,
  features,
  buttonText,
  buttonVariant = "default",
  highlighted = false,
  borderColor = "border-gray-300",
}: PricingCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg border-t-4 ${borderColor} ${highlighted ? 'relative transform lg:scale-105' : ''}`}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
      )}
      
      <h4 className="text-xl font-bold mb-2">{name}</h4>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check text-green-500 mr-2"></i>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={buttonVariant === "outline" ? "outline" : "default"}
        className={
          buttonVariant === "outline" 
            ? `w-full border-2 ${borderColor.replace('border', 'border-')} hover:bg-opacity-10 transition` 
            : "w-full bg-primary hover:bg-primary/90 transition"
        }
      >
        {buttonText}
      </Button>
    </div>
  );
}
