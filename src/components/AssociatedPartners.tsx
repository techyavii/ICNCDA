import React from "react";

const partners = [
  {
    name: "New York Institute of Technology, USA",
    logo: "/partner/nyit.png",
  },
  {
    name: "ÉTS Montréal, Canada",
    logo: "/partner/ets.jpg",
  },
  {
    name: "Beijing University of Posts and Telecommunications, China",
    logo: "/partner/bupt.png",
  },
  {
    name: "Cardiff Metropolitan University, UK",
    logo: "/partner/cardiff.jpeg",
  },
  {
    name: "Teesside University, UK",
    logo: "/partner/teesside.png",
  },
  {
    name: "St George’s University, UK",
    logo: "/partner/stgeorges.png",
  },
  {
    name: "Manchester Metropolitan University, UK",
    logo: "/partner/mmu.png",
  },
  {
    name: "University of Maryland, Baltimore County, USA",
    logo: "/partner/umbc.png",
  },
];

const AssociatedPartners = () => {
  return (
    <section className="bg-gray-50 py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Section Title */}
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            Associated Partners
          </h2>
        </div>
        
        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center  transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociatedPartners;
