import React from "react";
import { Clock } from "lucide-react"; // nice icon for "Coming Soon"

const ComingSoon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <Clock size={64} className="text-gray-400 mb-4" />
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500">This feature is under development. Please check back soon.</p>
    </div>
  );
};

export default ComingSoon;