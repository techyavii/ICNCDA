
import React from 'react';
import About from '@/components/About';
import ConferenceHighlights from '@/components/ConferenceHighlights';
import ConferenceTracks from '@/components/ConferenceTracks';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import IndexingSection from '@/components/IndexingSection';
import AssociatedPartners from '@/components/AssociatedPartners';

const Index: React.FC = () => {
  const carouselImages = [
    { src: "/lovable-uploads/Essex4.jpg", alt: "University of Essex Campus" },
    { src: "/lovable-uploads/Essex5.jpg", alt: "University of Essex Building" },
    { src: "/lovable-uploads/Essex6.jpg", alt: "University of Essex Entrance" },
    { src: "/lovable-uploads/Essex7.jpg", alt: "Aerial view of University of Essex" },
    { src: "/lovable-uploads/Essex8.jpg", alt: "University of Essex campus with students" },
    { src: "/lovable-uploads/Essex3.webp", alt: "University of Essex Modern Building" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ImageCarousel images={carouselImages} />
      <IndexingSection />
      <About />
      <ConferenceHighlights />
      <ConferenceTracks />
      <ImportantDatesSection />
      <AssociatedPartners/>
      <Footer />
    </div>
  );
};


export default Index;
