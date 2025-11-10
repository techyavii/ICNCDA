import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Network, Cpu, Database, Shield, Rocket } from 'lucide-react';

const ConferenceTracks: React.FC = () => {
  const tracks = [
    {
      id: 1,
      title: "Networks and Communication Technologies",
      icon: Network,
      topics: [
        "Wireless, Mobile, and 5G/6G Networks",
        "Internet of Things (IoT) and Sensor Networks",
        "Network Architectures, Protocols, and Security",
        "Software-Defined and Cognitive Networks",
        "Edge, Fog, and Cloud Networking"
      ]
    },
    {
      id: 2,
      title: "Computing Systems and Architectures",
      icon: Cpu,
      topics: [
        "High-Performance and Parallel Computing",
        "Distributed and Cloud Systems",
        "Embedded and Cyber-Physical Systems",
        "Green and Energy-Efficient Computing",
        "Quantum and Neuromorphic Computing"
      ]
    },
    {
      id: 3,
      title: "Data Analytics and Artificial Intelligence",
      icon: Database,
      topics: [
        "Machine Learning and Deep Learning Applications",
        "Big Data Processing and Management",
        "Data Mining and Knowledge Discovery",
        "Predictive Analytics and Decision Support Systems",
        "Explainable AI and Responsible Data Science"
      ]
    },
    {
      id: 4,
      title: "Security, Privacy, and Trust",
      icon: Shield,
      topics: [
        "Network and System Security",
        "Data Privacy and Cryptography",
        "Blockchain and Distributed Ledger Technologies",
        "Intrusion Detection and Threat Intelligence",
        "Secure Computing and Access Control"
      ]
    },
    {
      id: 5,
      title: "Applications and Emerging Technologies",
      icon: Rocket,
      topics: [
        "Smart Cities and Intelligent Infrastructure",
        "Autonomous Systems and Robotics",
        "Healthcare Informatics and Bio-Computing",
        "Financial, Industrial, and Environmental Data Analytics",
        "Human–Computer Interaction and Visualization"
      ]
    }
  ];

  return (
    <section id="tracks" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            Conference Tracks
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <Card key={track.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-8 w-8 text-goldsmiths-blue" />
                    <CardTitle className="font-druk text-xl text-goldsmiths-text">
                      Track {track.id}
                    </CardTitle>
                  </div>
                  <CardDescription className="font-graphik text-base text-goldsmiths-text">
                    {track.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {track.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-goldsmiths-blue mr-2">•</span>
                        <span className="font-publico text-sm text-goldsmiths-text">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;

