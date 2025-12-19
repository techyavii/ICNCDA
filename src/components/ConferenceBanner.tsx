import React from 'react';
import { Calendar } from 'lucide-react';

const ConferenceBanner = () => {
  return (
    <div 
      className="w-full bg-cover bg-center py-8 relative" 
      style={{ 
        backgroundImage: "url('/lovable-uploads/university-main.jpeg')", 
        backgroundSize: 'cover',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Logo - Conference Logo */}
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <img 
            src="Logo.png" 
            alt="ICNCDA Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Center - Conference Details */}
        <div className="text-center text-white flex-grow">
          <h1 className="text-lg md:text-2xl font-medium tracking-tight mb-2">
            International Conference on Networks, Computing Systems, and Data Analytics
          </h1>
          <h2 className="text-base md:text-xl font-medium mb-2">(ICNCDA 2026)</h2>
          <p className="text-sm md:text-base font-medium mb-2">
            Organiser: University of Essex, England, UK
          </p>
          <div className="flex items-center justify-center text-sm md:text-base mb-2">
            <Calendar className="mr-2" size={16} />
            <p>22-23 July, 2026</p>
          </div>
          <p className="text-sm md:text-base font-medium text-yellow-300">
            Premier global forum for networking, computing, and data-driven technologies
          </p>
        </div>

        {/* Right Logo - University Logo */}
        <div className="bg-white p-2 rounded-lg shadow-sm inline-block">
          <img
            src="/lovable-uploads/logo.png"
            alt="University of Essex"
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;
