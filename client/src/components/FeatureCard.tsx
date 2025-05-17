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
    primary: "bg-primary bg-opacity-10 text-primary",
    secondary: "bg-secondary bg-opacity-10 text-secondary",
    accent: "bg-accent bg-opacity-10 text-accent",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
      <div className={`${colorClasses[color]} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {extraContent}
    </div>
  );
}
