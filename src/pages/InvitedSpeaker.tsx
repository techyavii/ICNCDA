import Footer from '@/components/Footer';
import InvitedSpeakerCard from '@/components/InvitedSpeakerCard';

const InvitedSpeakers = () => {
    const speakers = [
    {
    name: "Nikhileswar Reddy Marapu",
    designation: "Senior Information Security Engineer",
    company: "Gemological Institute of America",
    experience: "10 Years",
    email: "mnikhilnikku@outlook.com",
    conferenceLink: "",
    titleOfTalk: "Securing AI Agents and Enterprise GenAI Use",
    abstract:
        "As AI agents and enterprise GenAI become embedded in daily operations, they introduce new security concerns around data access, prompt manipulation, autonomous actions, and weak governance. This keynote explores how organizations can securely enable AI through stronger visibility, access control, monitoring, and policy frameworks that reduce risk without slowing innovation.",
    profilePic: "invited-speakers/nikhileswar.jpeg",
    country: "",
    city: "",
    },
    {
      name: "Vivek Venkatesan",
      designation: "IEEE Senior Member",
      company: "The Vanguard Group, USA",
      experience: "",
      email: "vvivek4ever@gmail.com",
      conferenceLink: "",
      titleOfTalk: "",
      abstract: "",
      profilePic: "invited-speakers/vivek_venkatesan.jpeg",
      country: "USA",
      city: "",
    }
  
];

  return (
    <div>
      <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-publico text-center text-gray-900 mb-12">
          Invited Speakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <InvitedSpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default InvitedSpeakers
