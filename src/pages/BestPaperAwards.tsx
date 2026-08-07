import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, FileText, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface Paper {
  id: number;
  title: string;
  authors: string;
}

const BestPaperAwards: React.FC = () => {
  const papers: Paper[] = [
    {
      id: 1,
      title: 'Adaptive Multi-Parameter Cluster Head Selection for Energy-Efficient Healthcare Sensor Networks',
      authors: 'Megha K M, U B Mahadevaswamy'
    },
    {
      id: 2,
      title: 'AI-Based Cybersecurity Framework for Smart Computing Systems using Big Data Analytics and Intelligent Threat',
      authors: 'Akshay Kumar Darla'
    },
    {
      id: 3,
      title: 'Explainable AI for Intelligent Security Decision Support in Smart and Secure Computing Systems Using Big Data',
      authors: 'Ravi Krishna Yalamanchili'
    },
    {
      id: 4,
      title: 'CATDOC: Cluster Enabled Efficient Auto Annotation Technique for Document Images',
      authors: 'Thejashwini B L, H S Nagendraswamy, Shivani P R'
    },
    {
      id: 5,
      title: 'Hybrid Ensemble Framework for Explainable and Efficient Static Malware Detection on the EMBER Dataset',
      authors: 'Ahmed Mohammed Redha Abdulsattar, Riyadh Rahef Nuiaa Alogaili, Selvakumar Manickam'
    },
    {
      id: 6,
      title: 'AI-Driven Intelligent IoT Systems for Smart Computing and Real-Time Monitoring',
      authors: 'Arun Kumar Rajamandrapu'
    },
    {
      id: 7,
      title: 'Scalable AI Framework using LLMs for Intelligent Network Analytics, Cloud Computing and Enterprise Systems',
      authors: 'Sreepal Reddy Bolla'
    },
    {
      id: 8,
      title: 'Intelligent, Secure and Data-Driven Systems for Sustainable Digital Transformation and Smart Infrastructure',
      authors: 'Neeraj Bhargav'
    },
    {
      id: 9,
      title: 'Cloud–Edge Integrated Smart Computing Framework for Intelligent Systems Using Real-Time Big Data Analytics',
      authors: 'Madhusudana Rao Muthirevula'
    },
    {
      id: 10,
      title: 'LLM-Based Intelligent Monitoring and Performance Optimization for Cloud Infrastructure Systems',
      authors: 'Sharmin Ferdous'
    },
    {
      id: 11,
      title: 'Secure and Scalable Multi-Cloud Resource Optimization Using AI and LLM-Based Predictive Models',
      authors: 'Jawad Sarwar'
    },
    {
      id: 12,
      title: 'LLM-Integrated Cloud Resource Management Framework for Real-Time Performance Optimization',
      authors: 'Uday Kumar Reddy Gangula'
    },
    {
      id: 13,
      title: 'Agentic AI–Driven Supply Chain Orchestration Using Large Language Models and Predictive Demand Intelligence',
      authors: 'Pradeep Kachakayala'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-12 w-12 text-yellow-500 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">Best Paper Awards</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating outstanding research contributions at ICNCDA 2026. These papers represent the pinnacle of innovation and excellence in their respective fields.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {papers.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">
                      Best Paper #{paper.id}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {paper.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {paper.authors}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
              <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Recognition of Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These distinguished papers were selected through rigorous peer review and evaluation by our expert committee.
                Each submission represents cutting-edge research that advances knowledge and innovation in networks, computing
                systems, data analytics, and related fields. Congratulations to all the authors for their outstanding contributions to ICNCDA 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BestPaperAwards;
