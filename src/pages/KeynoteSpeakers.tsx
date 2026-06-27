import Footer from '@/components/Footer';
import InvitedSpeakerCard from '@/components/InvitedSpeakerCard';

const InvitedSpeakers = () => {
    const speakers = [
    {
    name: "Swetha Sree Kommuri",
    designation: "Lead Data Scientist",
    company: "Independent Researcher",
    experience: "10+ Years",
    email: "Swethakommuri0@gmail.com",
    conferenceLink: "",
    titleOfTalk: "The Economics of Intelligence: How Real-Time ML Transformed Fraud Detection Pipelines",
    abstract: "",
    profilePic: "keynote-speakers/swetha-sree-kommuri.jpg",
    country: "United States",
    city: "",
},
{
    name: "Jeevan Reddy Geereddy",
    designation: "Senior Technical Specialist",
    company: "Independent Researcher",
    experience: "10 Years",
    email: "jeevan.geereddy@gmail.com",
    conferenceLink: "",
    titleOfTalk: "Beyond Open Banking: Building a Self-Serve Analytics Economy on a Foundation of Trust",
    abstract: "",
    profilePic: "keynote-speakers/jeevan-reddy-geereddy.png",
    country: "United States",
    city: "",
},
{
    name: "Anil Kumar Batchu",
    designation: "Software Engineer",
    company: "Independent Researcher",
    experience: "18+ Years",
    email: "anilkumar.batchu1974@gmail.com",
    conferenceLink: "",
    titleOfTalk: "Beyond the Cloud: AI-Native Platforms and the Future of Financial Technology",
    abstract: "",
    profilePic: "keynote-speakers/anil-kumar-batchu.png",
    country: "United States",
    city: "",
},
{
    name: "Saddam Hussain",
    designation: "Data Scientist",
    company: "Independent Researcher",
    experience: "8+ Years",
    email: "im.saddamhussain96@gmail.com",
    conferenceLink: "",
    titleOfTalk: "Optimizing Industrial Quality & Emissions Simultaneously: ML-Driven Lime Kiln Control for Better Production and Kiln Operations and Higher Yield",
    abstract: "",
    profilePic: "keynote-speakers/saddam-hussain.jpg",
    country: "United States",
    city: "",
},
{
    name: "Zalak Shrof Aka Makwana",
    designation: "Lead Architect",
    company: "Independent Researcher",
    experience: "10+ Years",
    email: "shrofzalak@gmail.com",
    conferenceLink: "",
    titleOfTalk: "Predictive Networks: A Data-Centric Approach to Proactive Infrastructure Management",
    abstract: "",
    profilePic: "keynote-speakers/zalak-shrof-aka-makwana.png",
    country: "United States",
    city: "",
},
{
    name: "Suresh Kumar Grandhisiri",
    designation: "Director",
    company: "Independent Researcher",
    experience: "28+ Years",
    email: "sureshgrandhisiri13@gmail.com",
    conferenceLink: "",
    titleOfTalk: "Bridging Enterprise Legacy Systems with Generative AI for Autonomous Operations",
    abstract: "",
    profilePic: "keynote-speakers/suresh-kumar-grandhisiri.jpg",
    country: "India",
    city: "",
},
{
    name: "Pramod Kumar Salla",
    designation: "Software Engineer III",
    company: "Independent Researcher",
    experience: "9+ Years",
    email: "pramodksalla@gmail.com",
    conferenceLink: "",
    titleOfTalk: "The AI-Augmented Engineer: Building Autonomous Systems That Write Their Own Documentation",
    abstract: "",
    profilePic: "keynote-speakers/pramod-kumar-salla.jpg",
    country: "United States",
    city: "",
},
{
    name: "Jagadeesh Vasanthada",
    designation: "",
    company: "Kyyte Inc",
    experience: "",
    email: "",
    conferenceLink: "",
    titleOfTalk: "",
    abstract: "",
    profilePic: "keynote-speakers/jagadeesh-vasanthada.jpg",
    country: "United States",
    city: "",
},
{
    name: "Sneha Shambula",
    designation: "",
    company: "Amazon Web Services, Inc",
    experience: "",
    email: "",
    conferenceLink: "",
    titleOfTalk: "",
    abstract: "",
    profilePic: "keynote-speakers/sneha-shambula.jpg",
    country: "United States",
    city: "",
},
{
    name: "Vivek Venkatesan",
    designation: "",
    company: "The Vanguard Group",
    experience: "",
    email: "",
    conferenceLink: "",
    titleOfTalk: "",
    abstract: "",
    profilePic: "keynote-speakers/vivek-venkatesan.jpg",
    country: "United States",
    city: "",
},
{
    name: "Sai Sukesh Reddy Tummuri",
    designation: "",
    company: "Meta Platforms Inc",
    experience: "",
    email: "",
    conferenceLink: "",
    titleOfTalk: "",
    abstract: "",
    profilePic: "keynote-speakers/sai-sukesh-reddy-tummuri.jpg",
    country: "United States",
    city: "",
},
{
  name: "Milan Dudhatra",
  designation: "Software Engineer, Independent Researcher",
  company: "Independent Researcher",
  experience: "7+ Years",
  email: "milangdudhatra@gmail.com",
  conferenceLink: "https://www.icncda.co.uk/",
  titleOfTalk: "Predict Before You Repair: The Future of Failure Prevention in Distributed Systems",
  abstract: "This keynote explores the evolution of distributed systems from reactive failure management to predictive and autonomous reliability engineering. It discusses how AI-assisted operations (AIOps), observability, event-driven architectures, and self-healing cloud platforms can predict failures before they occur, minimize downtime, and improve the resilience of large-scale cloud infrastructure. Drawing from real-world experience in fleet-scale systems, the session highlights modern approaches to predictive reliability, intelligent automation, and the future of autonomous infrastructure.",
  profilePic: "keynote-speakers/milan-dudhatra.jpg",
  country: "United States",
  city: "",
},
  {
  name: "Mohammad Bani-Doumi",
  designation: "Assistant Professor, Faculty of Information Technology",
  company: "Applied Science Private University (ASU)",
  experience: "10 Years",
  email: "m_banidoumi@asu.edu.jo",
  conferenceLink: "https://www.icncda.co.uk/",
  areaOfResearch:
    "Artificial Intelligence, Natural Language Processing, Recommender Systems, Sentiment Analysis",
  profilePic: "invited-speakers/mohammad-bani-doumi.jpg",
  country: "Jordan",
  city: "Amman",
}
];

  return (
    <div>
      <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-publico text-center text-gray-900 mb-12">
          Keynote Speakers
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
