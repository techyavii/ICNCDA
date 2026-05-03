import KeynoteSpeakerCard from "./KeynoteSpeakerCard";

const KeynoteSpeakers = () => {
    const speakers = [
  {
    name: "Prof. Dhavalkumar (Dhaval) Thakker",
    designation: "Professor of Artificial Intelligence and Internet of Things",
    company: "University of Hull",
    profilePic: "keynotes/dhaval_thakker.jpg",
  },
  {
    name: "Prof. Hoang Nga Nguyen",
    designation: "Associate Professor (Cybersecurity & Formal Methods)",
    company: "Swansea University",
    profilePic: "keynotes/hoang_nguyen.jpg",
  },
  // {
  //   name: "Prof. Nikhil Deshpande",
  //   designation: "Associate Professor of Robotics and AI",
  //   company: "University of Nottingham",
  //   profilePic: "keynotes/nikhil_deshpande.jpeg",
  // },
   {
    name: "Prof. Sanjaya Kumar Panda",
    designation: "Assistant Professor (CSE)",
    company: "NIT Warangal",
    profilePic: "keynotes/sanjaya_panda.jpg"
   },
  {
      name: "Prof. Shivani Bali",
      designation: "Professor",
      company: "Jindal School of Banking & Finance, O.P. Jindal Global University, India",
      profilePic: "keynotes/Shivani.jpeg"
  }
  ];


  return (
    <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-8">
        <h2 className="font-druk md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block text-3xl text-center mb-12">
          Keynote Speakers
        </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <KeynoteSpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
