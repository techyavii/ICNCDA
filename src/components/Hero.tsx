
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-[60vh] flex items-center justify-center bg-goldsmiths-blue relative pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(141, 169, 214, 0.8), rgba(141, 169, 214, 0.8)), url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 py-14 text-center text-white">
        <h1 className="font-druk text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight text-center">
          2nd International Conference on<br />Networks, Computing Systems, and Data Analytics
        </h1>
        <h2 className="font-graphik text-xl md:text-2xl lg:text-3xl mb-6 text-goldsmiths-yellow text-center">
          (ICNCDA 2027)
        </h2>
        <p className="font-graphik text-lg md:text-xl mb-8 text-center">
          June 28-29, 2027 — University of Essex, England, UK
        </p>
        <p className="font-publico text-base md:text-lg mb-8 text-center">
          Organiser: University of Essex, England, UK
        </p>
        <button className="bg-goldsmiths-yellow text-goldsmiths-text hover:bg-opacity-90 transition-colors font-graphik font-bold py-3 px-8 rounded-md text-lg">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
