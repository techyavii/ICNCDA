
import React from 'react';

const IndexingSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Marquee Text */}
        <div className="bg-blue-600 text-white py-2 mb-8 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-lg font-bold mx-8">
              ICNCDA 2026: PREMIER GLOBAL FORUM FOR NETWORKS, COMPUTING SYSTEMS, AND DATA ANALYTICS
            </span>
            <span className="text-lg font-bold mx-8">
              JOIN US AT UNIVERSITY OF ESSEX, ENGLAND, UK • 29-30 MAY 2026
            </span>
            <span className="text-lg font-bold mx-8">
              EXPLORING NETWORKING, COMPUTING, AND DATA-DRIVEN TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Conference Mode Banner */}
        <div className="text-center mb-8">
          <h2 className="text-blue-600 font-bold text-xl md:text-2xl mb-2">
            ICNCDA 2026 Conference Information
          </h2>
          <p className="text-blue-600 font-semibold text-lg">
            [ July 29-30, 2026 - University of Essex, England, UK ]
          </p>
        </div>

        {/* Publication Info */}
        <div className="text-center mb-8">
          <h3 className="text-gray-700 font-bold text-lg md:text-xl uppercase tracking-wide">
            All the accepted papers will be published in the proceedings of ICNCDA 2026.
          </h3>
        </div>

        {/* Indexing Logos */}
        {/* <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <div className="text-gray-700 font-bold text-lg">
            INDEXING**
          </div>
          
          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/725f0c57-2f02-4866-9ce2-7744742821cf.png" 
              alt="Scopus" 
              className="h-8 w-auto"
            />
          </div>

          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/45cd7b2b-6ce4-440d-b9c0-a42bcd8d6302.png" 
              alt="IET Inspec" 
              className="h-8 w-auto"
            />
          </div>

          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/68fb2959-c0bc-4ab9-83e7-0cfa1b75966f.png" 
              alt="WTi AG" 
              className="h-8 w-auto"
            />
          </div>

          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/f7bd7e6d-7376-4e6d-91b3-e5a8422eebde.png" 
              alt="SCImago" 
              className="h-8 w-auto"
            />
          </div>

          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/c29561bc-5bfa-4df6-b297-2bbcf25d05ae.png" 
              alt="zbMATH" 
              className="h-8 w-auto"
            />
          </div>

          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/f1354bff-c8da-4917-be3b-2eedd349e955.png" 
              alt="Google Scholar" 
              className="h-12 w-auto"
            />
          </div>

          <div className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm flex items-center">
            <img 
              src="/lovable-uploads/57db661f-1774-4e59-bfc8-f4ff5285fe76.png" 
              alt="ISI Proceedings" 
              className="h-10 w-auto"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default IndexingSection;
