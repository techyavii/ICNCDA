
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            About the Conference
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-6">
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            The International Conference on Networks, Computing Systems, and Data Analytics (ICNCDA) is a premier global forum that brings together researchers, academicians, industry professionals, and practitioners to exchange knowledge, ideas, and innovations across the domains of networking, computing, and data-driven technologies.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            ICNCDA aims to foster collaboration between the computing and data science communities to address emerging challenges in building intelligent, secure, and high-performance systems. The conference provides a platform for presenting cutting-edge research, discussing real-world applications, and exploring the future of connected, computational, and analytical ecosystems.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text leading-relaxed text-justify">
            <strong>ICNCDA invites original research papers, case studies, and industrial experiences that address current trends, breakthroughs, and future directions in the interdisciplinary areas of networks, computing systems, and data analytics.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
