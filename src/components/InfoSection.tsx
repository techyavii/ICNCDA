
import React from 'react';

interface DateInfo {
  title: string;
  date: string;
}

interface InfoSectionProps {
  id: string;
  title: string;
  items?: DateInfo[];
  notices?: string[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, items, notices }) => {
  return (
    <section id={id} className="py-6 px-2">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <h3 className="font-druk text-xl text-center py-3 bg-goldsmiths-blue text-white">
            {title}
          </h3>
          
          <div className="p-6">
            {items && (
              <div className="mb-4 h-64 overflow-hidden relative">
                <div className="animate-marquee-vertical">
                  {items.map((item, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-graphik font-bold text-goldsmiths-text mb-1 text-justify">{item.title}</p>
                      <div className="bg-goldsmiths-beige rounded p-2 text-justify">{item.date}</div>
                    </div>
                  ))}
                  {/* Duplicate items for continuous scrolling */}
                  {items.map((item, index) => (
                    <div key={`dup-${index}`} className="mb-4">
                      <p className="font-graphik font-bold text-goldsmiths-text mb-1 text-justify">{item.title}</p>
                      <div className="bg-goldsmiths-beige rounded p-2 text-justify">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {notices && (
              <div className="mb-4 h-64 overflow-hidden relative">
                <div className="animate-marquee-vertical">
                  {notices.map((notice, index) => (
                    <div key={index} className="mb-4 bg-goldsmiths-beige rounded p-2 text-justify">
                      {notice}
                    </div>
                  ))}
                  {/* Duplicate notices for continuous scrolling */}
                  {notices.map((notice, index) => (
                    <div key={`dup-${index}`} className="mb-4 bg-goldsmiths-beige rounded p-2 text-justify">
                      {notice}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {!items && !notices && (
              <div className="text-center py-4 font-publico">
                <p>Download links will be available soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
