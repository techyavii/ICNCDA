import React from 'react';
import Footer from '@/components/Footer';

const CallForPapers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-6">Call for Papers — ICNCDA 2026</h1>

          <div className="mb-8">
            <p className="font-publico text-lg mb-4">
              International Conference on Networks, Computing Systems, and Data Analytics (ICNCDA 2026) aims to bring together leading academicians, researchers, innovators, and industry experts to explore cutting-edge advancements in smart technologies and their role in building sustainable systems for the future.
            </p>
            <p className="font-publico text-lg mb-4">
              In today’s rapidly evolving digital landscape, the convergence of Artificial Intelligence (AI), Internet of Things (IoT), Smart Grids, Green Energy, Blockchain, Cloud Computing, and Data Analytics plays a transformative role in shaping sustainable societies. This conference serves as a premier platform to exchange ideas, present novel research, and discuss innovative solutions that address global challenges such as climate change, energy efficiency, smart cities, sustainable manufacturing, and digital governance.
            </p>
            <p className="font-publico text-lg">
              ICNCDA 2026 will feature keynote lectures, technical paper presentations, panel discussions, industry sessions, and workshops designed to foster collaboration between academia and industry. We invite original and unpublished research contributions in (but not limited to) the thematic areas below.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-druk text-xl">Track 1: Networks and Communication Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Wireless, Mobile, and 5G/6G Networks</li>
                  <li>Internet of Things (IoT) and Sensor Networks</li>
                  <li>Network Architectures, Protocols, and Security</li>
                  <li>Software-Defined and Cognitive Networks</li>
                  <li>Edge, Fog, and Cloud Networking</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 2: Computing Systems and Architectures</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>High-Performance and Parallel Computing</li>
                  <li>Distributed and Cloud Systems</li>
                  <li>Embedded and Cyber-Physical Systems</li>
                  <li>Green and Energy-Efficient Computing</li>
                  <li>Quantum and Neuromorphic Computing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 3: Data Analytics and Artificial Intelligence</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Machine Learning and Deep Learning Applications</li>
                  <li>Big Data Processing and Management</li>
                  <li>Data Mining and Knowledge Discovery</li>
                  <li>Predictive Analytics and Decision Support Systems</li>
                  <li>Explainable AI and Responsible Data Science</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 4: Security, Privacy, and Trust</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Network and System Security</li>
                  <li>Data Privacy and Cryptography</li>
                  <li>Blockchain and Distributed Ledger Technologies</li>
                  <li>Intrusion Detection and Threat Intelligence</li>
                  <li>Secure Computing and Access Control</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 5: Applications and Emerging Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Smart Cities and Intelligent Infrastructure</li>
                  <li>Autonomous Systems and Robotics</li>
                  <li>Healthcare Informatics and Bio-Computing</li>
                  <li>Financial, Industrial, and Environmental Data Analytics</li>
                  <li>Human–Computer Interaction and Visualization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="mt-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Important Dates</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Paper Submission Deadline: <strong>30th December 2025</strong></li>
              <li>Acceptance Notification Due: <strong>30th January 2026</strong></li>
              <li>Registration Due: <strong>30th December 2025</strong></li>
              <li>Camera Ready Submission: <strong>30th January 2026</strong></li>
              <li>Conference Dates: <strong>20th - 21st July 2026</strong></li>
            </ul>
          </div> */}

          <div className="mt-10">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Submission Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Submissions must be original and unpublished.
              Authors should follow the conference formatting instructions (details on the website).</li>
              <li>All submissions will undergo peer review by the Technical Program Committee.</li>
              <li>Accepted papers will be included in the conference proceedings; selected high-quality papers may be invited for journal special issues.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPapers;
