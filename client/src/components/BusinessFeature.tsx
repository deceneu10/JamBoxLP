import { ReactNode } from "react";

interface BusinessFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BusinessFeature({ icon, title, description }: BusinessFeatureProps) {
  return (
    <div className="flex items-start space-x-6 bg-card p-6 rounded-xl shadow-lg border border-gray-800">
      <div className="bg-accent p-3 rounded-lg text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
