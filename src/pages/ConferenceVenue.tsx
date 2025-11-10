import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const venueImages = [
    {
      src: "/lovable-uploads/university-main.jpeg",
      alt: "Aerial view of University of Essex main campus"
    },
    {
      src: "/lovable-uploads/Essex2.jpg",
      alt: "University of Essex campus with students"
    },
    {
      src: "/lovable-uploads/Essex3.webp",
      alt: "University of Essex main building"
    },
    {
      src: "/lovable-uploads/Essex4.jpg",
      alt: "Student life at University of Essex"
    }
  ];

  const locationImages = [
    { src: "/lovable-uploads/Colchester.jpg", alt: "Colchester city view" },
    { src: "/lovable-uploads/Colchester2.jpg", alt: "London cityscape near Essex" },
    { src: "/lovable-uploads/Colchester3.webp", alt: "Albert Sloman Library at Essex" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">ABOUT US</h1>
          
          {/* Main venue section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              {venueImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">UNIVERSITY OF ESSEX</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>
                  The University of Essex is a public research university in Essex, England, known for its international outlook — ranking 17th globally in this regard. The university’s main campus spans over 200 acres near Colchester, approximately 45 minutes from London by train.
                </p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>Wivenhoe Park, Colchester CO4 3SQ, United Kingdom</p>
              </div>
              <a 
                href="https://www.google.com/maps?q=University+of+Essex+Colchester+UK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Location section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify">
                The University’s Colchester Campus is located in the scenic Wivenhoe Park — a historic estate surrounded by green spaces and lakes. The campus is divided into North, Central, and South areas, hosting accommodation, academic buildings, and vibrant student facilities such as libraries, sports centers, and social hubs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.2902422479127!2d0.9475!3d51.8770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b918ee9ecde9%3A0x87f671f4c2528894!2sUniversity%20of%20Essex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* About section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">ACADEMIC EXCELLENCE</h2>
            <p className="text-justify mb-6">
              The University of Essex is renowned for its strong academic programs and commitment to innovative research. It holds particular distinction in disciplines like sociology, economics, politics, and modern languages. The campus fosters an inclusive and globally connected community, reflecting its dedication to international education and collaboration.
            </p>
            <p className="text-justify text-gray-600 text-sm">
              Students benefit from a supportive environment, access to world-class faculty, and a diverse range of extracurricular activities that enhance both academic and personal development. With a focus on critical thinking, creativity, and global engagement, Essex continues to prepare graduates who are ready to make a meaningful impact worldwide.
            </p>
          </div>

          {/* Essex & Colchester section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">ESSEX & COLCHESTER</h2>
            <p className="mb-6 text-justify">
              Colchester, Britain’s first recorded town, is a blend of rich history and modern vibrancy. It offers cultural attractions such as Colchester Castle, art galleries, and local markets. The University of Essex’s location provides easy access to London and coastal towns, offering both academic inspiration and leisure opportunities. Visitors will find the region’s balance of academic excellence, natural beauty, and cultural life both enriching and inspiring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locationImages.map((image, index) => (
                <div key={index} className="bg-black p-2 rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceVenue;
