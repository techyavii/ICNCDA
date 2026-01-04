import React from 'react';
import Footer from '@/components/Footer';

const Committee = () => {
  const generalChairs = [
  // { name: "Dr Vishal Krishna Singh", affiliation: "University of Essex, UK" },
  { name: "Prof. Martin Reed", affiliation: "University of Essex, UK" },
  { name: "Prof. Liangxiu Han", affiliation: "Manchester Metropolitan University, UK" },
];

const honoraryChairs = [
  { name: "Prof. Houbing Herbert Song", affiliation: "University of Maryland, Baltimore County, USA" },
  { name: "Dr. Ginu Rajan", affiliation: "Cardiff Metropolitan University, UK" },
];

const organisingChairs = [
  { name: "Dr. Vishal Krishna Singh", affiliation: "University of Essex, UK" },
  // *Yet to be confirmed
  // { name: "Prof. Nagham Saeed", affiliation: "University of West London, UK" },
  // { name: "Dr. Sandra Cespedes", affiliation: "Concordia University, Canada" },
];

const technicalProgramChairs = [
  { name: "Prof. Wenjia Li", affiliation: "New York Institute of Technology, USA" },
  { name: "Prof. Kuljeet Kaur", affiliation: "ÉTS Montréal, Canada" },
  { name: "Dr. Weiwei Jiang", affiliation: "Beijing University of Posts and Telecommunications, China" },
  { name: "Dr. Rajkumar Singh Rathore", affiliation: "Cardiff Metropolitan University, UK" },
  { name: "Dr. Geetika Aggarwal", affiliation: "Teesside University, UK" },
  { name: "Dr. Ferheen Ayaz", affiliation: "City St George's, University of London, UK" },
];

const publicationChairs = [
  { name: "Dr. Zdzislaw Polkowski", affiliation: "The Karkonosze University of Applied Sciences, Poland" },
  { name: "Dr. Muge Sayit", affiliation: "University of Essex, UK" },
  { name: "Dr. Rahmat Ullah", affiliation: "University of Essex, UK" },
];

const awardsChairs = [
  { name: "Dr. Amit Singh", affiliation: "University of Essex, UK" },
  { name: "Dr. Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
];

const advisoryCommittee = [
  { name: "Nuno M. Garcia", affiliation: "University of Beira Interior, Portugal" },
  { name: "Jaafar Alghazo", affiliation: "Virginia Military Institute, USA" },
  { name: "Prajoy Podder", affiliation: "Institute of ICT, BUET, Dhaka" },
  { name: "M. Rubaiyat Hossain Mondal", affiliation: "Institute of ICT, BUET, Dhaka" },
  { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
  { name: "Khan Muhammad", affiliation: "Sejong University, South Korea" },
  { name: "Yenumula B Reddy", affiliation: "Grambling State University, USA" },
  { name: "Alireza Jolfaei", affiliation: "Macquarie University, Australia" },
  { name: "Flah Aymen", affiliation: "National School of Engineering of Gabes, Tunisia" },
  { name: "Dr. Haider Raza", affiliation: "University of Essex, UK" },
  { name: "Placido Rogerio Pinheiro", affiliation: "University of Fortaleza, Brazil" },
  { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
  { name: "Gautam Srivastava", affiliation: "Brandon University, Canada" },
  { name: "Dr. Mahendra K. Shukla", affiliation: "IIIT Gwalior, India" },
  { name: "Vassilis C. Gerogiannis", affiliation: "University of Thessaly, Greece" },
  { name: "Ilya Levin", affiliation: "Tel Aviv University, Israel" },
  { name: "Dr. Jagpreet Singh", affiliation: "IIT Ropar, India" },
  { name: "Muhibul Haque Bhuyan", affiliation: "Southeast University, Bangladesh" },
  { name: "Dr. Rab Nawaz", affiliation: "University of Essex, UK" },
  { name: "Dr. Vijay Bhaskar Semwal", affiliation: "MANIT Bhopal, India" },
];
const technicalProgramCommittee = [
  { name: "Prof. Carlos Rompante Da Cunha", affiliation: "Administração e Turismo, Portugal" },
  { name: "Prof. Hongbo Du", affiliation: "University of Buckingham, UK" },
  { name: "Prof. Sara Paiva", affiliation: "Instituto Politécnico de Viana do Castelo, Portugal" },
  { name: "Prof. Manuel J. Cabral S. Reis", affiliation: "UTAD University, Portugal" },
  { name: "Prof. Rajeev Kanth", affiliation: "Savonia University of Applied Sciences, Finland" },
  { name: "Prof. Rosdiadee Nordin", affiliation: "Sunway University, Malaysia" },
  { name: "Dr. Dijana Oreski", affiliation: "University of Zagreb, Croatia" },
  { name: "Dr. Jafar A. Alzubi", affiliation: "Al-Balqa Applied University, Jordan" },
  { name: "Dr. Alex Norta", affiliation: "Tallinn University of Technology, Estonia" },
  { name: "Dr. Utku Kose", affiliation: "Suleyman Demirel University, Turkey" },
  { name: "Dr. Oana Geman", affiliation: "Chalmers University of Technology, Sweden" },
  { name: "Dr. Mohammad Shojafar", affiliation: "University of Surrey, UK" },
  { name: "Dr. Anish Jindal", affiliation: "Durham University, UK" },
  { name: "Dr. Gagangeet Singh Aujla", affiliation: "Durham University, UK" },
  { name: "Dr. Sachin Kumar", affiliation: "South Ural State University, Russia" },
  { name: "Dr. Prayag Tiwari", affiliation: "Halmstad University, Sweden" },
  { name: "Dr. Amit Kumar Jaiswal", affiliation: "University of Surrey, UK" },
  { name: "Dr. Qianqian Xie", affiliation: "University of Manchester, UK" },
  { name: "Dr. Francesco Piccialli", affiliation: "University of Naples Federico II, Italy" },
  { name: "Prof. Ashiq Anjum", affiliation: "University of Leicester, UK" },
  { name: "Yu-Dong Zhang", affiliation: "University of Leicester, UK" },
  { name: "Abhishek Swaroop", affiliation: "Bhagwan Parshuram Institute of Technology, India" },
  { name: "Giorgos Karagiannidis", affiliation: "Aristotle University of Thessaloniki, Greece" },
  { name: "Fides del Castillo", affiliation: "De La Salle University, Philippines" },
  { name: "Nuno M. Garcia", affiliation: "University of Beira Interior, Portugal" },
  { name: "Jaafar Alghazo", affiliation: "Virginia Military Institute, USA" },
  { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
  { name: "Yenumula B Reddy", affiliation: "Grambling State University, USA" },
  { name: "Alireza Jolfaei", affiliation: "Macquarie University, Australia" },
  { name: "Placido Rogerio Pinheiro", affiliation: "University of Fortaleza, Brazil" },
  { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
  { name: "Dr. Rab Nawaz", affiliation: "University of Essex, UK" },
  { name: "Dr. Vijay Bhaskar Semwal", affiliation: "MANIT Bhopal, India" },
  { name: "Kashif Saleem", affiliation: "Universiti Teknologi Malaysia, Riyadh, Saudi Arabia" },
  { name: "Kemal Polat", affiliation: "Abant Izzet Baysal University, Turkey" },
  { name: "Juhriyansyah Dalle", affiliation: "Universitas Lambung Mangkurat, Indonesia" },
  { name: "Sarada Prasad Gochhayat", affiliation: "IIT Jammu, India" },
  { name: "Ilya Levin", affiliation: "Tel Aviv University, Israel" },
  { name: "Lalit Garg", affiliation: "University of Malta, Msida, Malta" },
  { name: "Arij Naser Abougreen", affiliation: "University of Tripoli, Libya" },
  { name: "Iwan Adhicandra", affiliation: "University of Sydney, Australia" },
  { name: "Meng Li", affiliation: "Hefei University of Technology, China" },
  { name: "Alfredo Grieco", affiliation: "Politecnico di Bari, Italy" },
  { name: "Quoc-Viet Pham", affiliation: "Pusan National University, South Korea" },
  { name: "Tu Nguyen", affiliation: "Kennesaw State University, USA" },
  { name: "Christos Douligeris", affiliation: "University of Piraeus, Greece" },
  { name: "Assunta Di Vaio", affiliation: "University of Naples Parthenope, Italy" },
  { name: "Daniel Lucky Michael", affiliation: "San Francisco Bay University, USA" },
  { name: "Md Sazol Ahmmed", affiliation: "Missouri University of Science and Technology, USA" },
  { name: "Rajani Kumari Vaddepalli", affiliation: "Callaway Golf, USA" },
];


  const CommitteeSection = ({ title, members }: { title: string; members: { name: string; affiliation: string }[] }) => (
    <div className="mb-8">
      <h3 className="font-druk text-xl md:text-2xl text-goldsmiths-text mb-4 border-b-2 border-goldsmiths-blue pb-2">
        {title}
      </h3>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div key={index} className="bg-goldsmiths-beige p-3 rounded">
            <p className="font-graphik font-bold text-goldsmiths-text">{member.name}</p>
            <p className="font-publico text-sm text-goldsmiths-text">{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-druk text-3xl md:text-4xl text-goldsmiths-text text-center mb-8 border-b-4 border-goldsmiths-blue pb-2 inline-block mx-auto">
            Committee
          </h1>

          <div className="space-y-8">
            <CommitteeSection title="General Chair(s)" members={generalChairs} />
            <CommitteeSection title="Honorary Chair(s)" members={honoraryChairs} />
            <CommitteeSection title="Organising Chair(s)" members={organisingChairs} />
            {/* <CommitteeSection title="Conference Chair(s)" members={conferenceChairs} /> */}
            <CommitteeSection title="Technical Program Chair(s)" members={technicalProgramChairs} />
            <CommitteeSection title="Publication Chair(s)" members={publicationChairs} />
            <CommitteeSection title="Awards Chair(s)" members={awardsChairs} />
            <CommitteeSection title="Advisory Committee" members={advisoryCommittee} />
            <CommitteeSection title="Technical Program Committee" members={technicalProgramCommittee} />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
