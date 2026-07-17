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
    },
    {
      name: "Lalith Chandra Bandaru",
      designation: "ITDS Architect",
      company: "Sage Group Technologies Inc",
      experience: "10+ Years",
      email: "LALITHCHANDRA@LIVE.COM",
      conferenceLink: "",
      titleOfTalk: "From CRM to Intelligent Enterprise: The Next Wave of Digital Transformation",
      abstract:
        "How Cloud, Automation, Data, and AI are reshaping every enterprise business process. This session examines market forces demanding intelligent enterprise strategies, the Salesforce platform from architecture to AI capabilities, real production metrics from Agentforce deployments, and a practical five-pillar framework for responsible AI adoption.",
      profilePic: "invited-speakers/lalith_chandra_bandaru.jpeg",
      country: "USA",
      city: "",
    },
    {
      name: "Mohammed Shakeer Bandrevu",
      designation: "Senior Software Developer",
      company: "Tata Consultancy Services",
      experience: "10+ Years",
      email: "shakeersha786@gmail.com",
      conferenceLink: "",
      titleOfTalk: "AI-Powered Enterprise Operations: How ServiceNow Is Becoming the Control Tower for Multi-Cloud Environments",
      abstract:
        "As enterprises adopt multi-cloud strategies, managing operations across diverse platforms becomes increasingly complex. ServiceNow is emerging as an AI-powered control tower that unifies workflows, automates incident resolution, enhances visibility, and optimizes resource management. With the integration of Agentic AI, autonomous digital agents can proactively monitor systems, coordinate cross-platform actions, make context-aware decisions, and resolve issues with minimal human intervention. This enables organizations to improve efficiency, reduce operational risks, strengthen governance, and accelerate digital transformation across dynamic cloud environments.",
      profilePic: "invited-speakers/mohammed_shakeer_bandrevu.jpeg",
      country: "India",
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
        profilePic: "invited-speakers/mohammad-bani-doumi.jpeg",
        country: "Jordan",
        city: "Amman",
      },
      {
    name: "Amit Kumar",
    designation: "Principal Software Engineer",
    company: "AT&T Services Inc.",
    experience: "22 Years",
    email: "amit.dumian@gmail.com",
    conferenceLink: "https://www.icncda.co.uk/",
    areaOfResearch:
      "Distributed Systems, Cloud Computing, Enterprise Software Engineering, Scalable System Architecture",
    profilePic: "invited-speakers/amit-kumar.jpeg",
    country: "",
    city: "",
  },
  {
    name: "Amiya Ranjan Mohanty",
    designation: "Engineering Manager / Enterprise Architect",
    company: "CitiusTech",
    experience: "22 Years",
    email: "mohanty127@outlook.com",
    conferenceLink: "https://www.icncda.co.uk/",
    areaOfResearch:
      "Enterprise Architecture, Cloud Computing, Distributed Systems, API Modernization, Cybersecurity, DevOps, Data Engineering, Artificial Intelligence",
    profilePic: "invited-speakers/amiya-ranjan-mohanty.jpeg",
    country: "",
    city: "",
  },
  {
    name: "Susant Kumar Sahoo",
    designation: "Advisor Application Designer",
    company: "Gainwell Technologies",
    experience: "21 Years",
    email: "ksusant@rediffmail.com",
    conferenceLink: "https://www.icncda.co.uk/",
    areaOfResearch:
      "Enterprise Architecture, Healthcare IT, Artificial Intelligence, Predictive Analytics, Decision Support Systems, Application Modernization, Cloud Computing",
    profilePic: "invited-speakers/susant-kumar-sahoo.jpeg",
    country: "",
    city: "",
  },
  {
  name: "Praveen Chaitanya Jakku",
  designation: "DevOps Engineer",
  company: "HHS Technology Group",
  experience: "8+ Years",
  email: "pcjakku@gmail.com",
  conferenceLink: "https://www.icncda.co.uk/",
  areaOfResearch:
    "AI-Driven Security, Zero Trust Architecture, Quantum-Resilient Security, Cloud-Native Systems, DevSecOps, AWS, Kubernetes, Infrastructure Automation, Cybersecurity, Cloud Platform Reliability",
  profilePic: "invited-speakers/praveen-chaitanya-jakku.jpeg",
  country: "",
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
