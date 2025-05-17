import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
  extraContent?: ReactNode;
}

export default function FeatureCard({ icon, title, description, color, extraContent }: FeatureCardProps) {
  const colorClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition duration-300 border border-gray-800">
      <div className={`${colorClasses[color]} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-gray-400">{description}</p>
      {extraContent}
    </div>
  );
}
