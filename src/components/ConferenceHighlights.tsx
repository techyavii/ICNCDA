import React from 'react';
import { Check } from 'lucide-react';

const ConferenceHighlights: React.FC = () => {
  const highlights = [
    "Global Research Platform: Meet and collaborate with experts and innovators from academia and industry worldwide.",
    "Keynote Talks: Inspiring sessions by renowned thought leaders in networking, computing, and AI-driven analytics.",
    "Technical Sessions: Peer-reviewed papers and discussions on emerging research and applications.",
    "Workshops: Hands-on sessions focusing on advanced tools, technologies, and methodologies.",
    "Industry-Academia Connect: Opportunities for partnerships, technology transfer, and joint research.",
    "Best Paper & Poster Awards: Recognizing excellence and innovation in research contributions."
  ];

  return (
    <section id="highlights" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            Conference Highlights
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-goldsmiths-beige shadow-lg rounded-lg p-6 border border-gray-200">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start mb-4 last:mb-0">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-goldsmiths-blue" />
              </div>
              <p className="ml-4 font-publico text-lg text-goldsmiths-text text-justify">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceHighlights;

