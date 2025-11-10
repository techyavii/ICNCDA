import React from 'react';
import Footer from '@/components/Footer';

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Publications</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">All the accepted papers will be published in the proceedings of ICNCDA 2026.
            </p>
            {/* <div className="flex justify-center">
              <img 
                src="/lovable-uploads/822681ae-4ba1-4184-9459-a05d77964424.png" 
                alt="Academic Indexing Services - Web of Science, Scopus, IET Inspec, dblp" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;