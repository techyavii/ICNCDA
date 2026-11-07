import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface AwardWinner {
  name: string;
  category: string;
  subAward: string;
}

const IcncdaAwardResults: React.FC = () => {
  const awardWinners: AwardWinner[] = [
    {
      name: 'Sandeep Kumar Jangam',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Finance & FinTech Innovation Award'
    },
    {
      name: 'Partha Sarathi Reddy Pedda Muntala',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Applied Artificial Intelligence Excellence Award'
    },
    {
      name: 'Nagireddy Karri',
      category: 'Software & Enterprise Solutions Awards',
      subAward: 'Emerging Technology Solutions Excellence Award'
    },
    {
      name: 'Rajesh Soma',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI-Powered Automation Excellence Award'
    },
    {
      name: 'Arun Pratap Singh',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Applied Artificial Intelligence Excellence Award'
    },
    {
      name: 'Charan Tej Gayapu',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI in Healthcare & Life Sciences Excellence Award'
    },
    {
      name: 'Naga Madhusudana Rao Chadaram',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI Innovation Leadership Award'
    },
    {
      name: 'Urvish Gajjar',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Excellence in AI-Driven Quality Engineering and Automation'
    },
    {
      name: 'Sathish Kaniganahalli Ramareddy',
      category: 'Cloud, Data & Digital Platforms Awards',
      subAward: 'Cloud AI & Data Platform Excellence Award'
    },
    {
      name: 'SUNIL SHARMA',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Sachin Singh',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'AI Innovation Leadership Award'
    },
    {
      name: 'Rasool Javeed Mohammad',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Generative AI Innovation Award'
    },
    {
      name: 'Anil Kumar Verma',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Research Excellence & Innovation Award'
    },
    {
      name: 'Hassan Rehan',
      category: 'Research, Innovation & Impact Awards',
      subAward: 'Healthcare & Biomedical Research Excellence Award'
    },
    {
      name: 'Praneeth Reddy Baddipadiga',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Networking, Infrastructure & Cybersecurity Leadership Award'
    },
    {
      name: 'Swapna Putti',
      category: 'Artificial Intelligence & Advanced Technologies Awards',
      subAward: 'Applied Artificial Intelligence Excellence Award'
    },
    {
      name: 'Ankur R. Tiwari',
      category: 'Academia–Industry Synergy Awards',
      subAward: 'Joint Intellectual Property & Product Innovation Award'
    }
  ];

  // Group winners by category
  const groupedWinners = awardWinners.reduce((acc, winner) => {
    if (!acc[winner.category]) {
      acc[winner.category] = [];
    }
    acc[winner.category].push(winner);
    return acc;
  }, {} as Record<string, AwardWinner[]>);

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">ICNCDA 2027 Awards Results</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence and innovation across academia, industry, and research at the
            2nd 2nd International Conference on Networks, Computing Systems, and Data Analytics (ICNCDA 2027).
            These distinguished individuals have been recognized for their outstanding contributions.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedWinners).map(([category, winners]) => (
            <Card key={category} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  {category}
                </CardTitle>
                <p className="text-blue-100">
                  {winners.length} award{winners.length > 1 ? 's' : ''} in this category
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {winners.map((winner, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-yellow-600" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {winner.name}
                          </h3>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {winner.subAward}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Recognition of Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These awards recognize outstanding achievements in various domains including artificial intelligence,
              cloud computing, research innovation, and enterprise solutions. Each recipient has demonstrated
              exceptional leadership, innovation, and impact in their respective fields. Congratulations to all
              the award winners for their remarkable contributions to ICNCDA 2027.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default IcncdaAwardResults;