import { ReactNode } from "react";

interface BusinessFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BusinessFeature({ icon, title, description }: BusinessFeatureProps) {
  return (
    <div className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-md">
      <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
