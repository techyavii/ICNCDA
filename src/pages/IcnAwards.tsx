import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, Users, Target, Award } from 'lucide-react';

export default function IcnAwards() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const academicAwards = [
    'Global Academic Legacy Award',
    'Distinguished Teaching Excellence Award',
    'Academic Leadership Excellence Award',
    'Visionary Academic Leadership Award',
    'Scholar Mentorship Excellence Award (UG / PG / PhD)',
    'Innovative Teaching Practices Award',
    'Outstanding Academic Contributor Award',
    'Institutional Leadership Excellence Award (Principal / Director)',
    'Strategic Academic Governance Award',
    'Rising Star in Academia Award',
    'Future-Ready Curriculum Innovation Award',
    'Thought Leadership in Education Award',
    'Experiential Learning Excellence Award',
    'Equity & Inclusive Education Leadership Award',
    'Digital Teaching Champion Award',
    'NEP 2020 Implementation Excellence Award',
    'Global Classroom Leadership Award',
    'Outcome-Based Education Excellence Award',
  ];

  const researchAwards = [
    'Research Excellence & Innovation Award',
    'Early Career Research Distinction Award (Under 35)',
    'Doctoral Research Excellence Award',
    "Master's Research Merit Award",
    'Translational Research Innovation Award',
    'High-Impact Scholarly Contribution Award',
    'Global Research Partnership Award',
    'Convergent Science Excellence Award',
    'Cross-Domain Research Leadership Award',
    'Women Scholars Leadership Award',
    'Promising Researcher Recognition Award',
    'Research Mentorship Excellence Award',
    'Intellectual Property Achievement Award',
    'Societal Impact Research Award',
    'AI-Driven Research Excellence Award',
    'Sustainable Development Research Award',
    'Healthcare & Biomedical Research Excellence Award',
    'Strategic & Defense Research Excellence Award',
  ];

  const innovationAwards = [
    'High-Growth Innovation Venture Award',
    'Breakthrough Innovation Leadership Award',
    'Social Transformation Excellence Award',
    'Entrepreneurial Ecosystem Excellence Award',
    'Emerging Tech Entrepreneur Award',
    'Women Entrepreneurship Excellence Award',
    'Innovation Catalyst in Education Award',
    'Student Venture Excellence Award',
    'Digital Learning Innovation Award',
    'Impact Entrepreneurship Award',
    'Sustainable Innovation Leadership Award',
    'Continuous Innovation Excellence Award',
    'DeepTech Innovation Award',
    'AI Start-Up of the Year Award',
    'HealthTech & BioTech Innovation Award',
    'FinTech Innovation Excellence Award',
  ];

  const aiAwards = [
    'AI Innovation Leadership Award',
    'AI Research & Algorithmic Excellence Award',
    'Applied Artificial Intelligence Excellence Award',
    'Generative AI Innovation Award',
    'AI in Healthcare & Life Sciences Excellence Award',
    'AI in Finance & FinTech Innovation Award',
    'AI in Smart Cities & Governance Excellence Award',
    'Real-World Machine Learning Excellence Award',
    'Deep Learning & Neural Networks Excellence Award',
    'Computer Vision & Image Intelligence Award',
    'Natural Language Processing (NLP) Excellence Award',
    'Ethical & Responsible AI Leadership Award',
    'Trustworthy AI & Model Governance Excellence Award',
    'Explainable AI (XAI) Innovation Award',
    'AI for Social Good Excellence Award',
    'Autonomous Systems & Robotics AI Excellence Award',
    'Intelligent Decision Systems Excellence Award',
    'Edge AI & Embedded Intelligence Award',
    'AI-Powered Automation Excellence Award',
  ];

  const cloudAwards = [
    'Cloud-Native Architecture Excellence Award',
    'Multi-Cloud & Hybrid Cloud Strategy Excellence Award',
    'Cloud Security & Compliance Leadership Award',
    'Cloud Migration & Modernization Champion Award',
    'Cloud Cost Optimization & FinOps Excellence Award',
    'Serverless Computing Innovation Award',
    'Cloud AI & Data Platform Excellence Award',
    'Database Performance & Scalability Excellence Award',
    'High-Availability & Disaster Recovery Excellence Award',
    'Big Data Engineering Achievement Award',
    'Real-Time Data Streaming & Analytics Excellence Award',
    'Data Lakehouse Architecture Excellence Award',
    'Data Security & Privacy Leadership Award',
    'Data Governance & Master Data Management Excellence Award',
    'Enterprise Data Integration Excellence Award',
    'Platform Engineering Excellence Award',
  ];

  const academiaIndustryAwards = [
  'Strategic Partnership Excellence Award',
  'Collaborative R&D Excellence Award',
  'Research Commercialization Excellence Award',
  'Joint IP & Product Innovation Award',
  'Workforce Readiness Excellence Award',
  'Experiential Industry Learning Excellence Award',
  'Industry Knowledge Integration Award',
  'Long-Term Industry Alliance Excellence Award',
  'Corporate Academic Mentor Excellence Award',
  'Live Industry Project Excellence Award',
  'Strategic Academic Advisory Impact Award',
  'Industry 5.0 Readiness Excellence Award',
  'Global Industry Engagement Award',
  'Corporate Skilling Leadership Award',
];

const institutionalAwards = [
  'Excellence in Higher Education Award',
  'Engineering Education Leadership Award',
  'Business Education Excellence Award',
  'Emerging University of Excellence Award',
  'Smart Campus Transformation Award',
  'Career Outcomes Excellence Award',
  'Community Engagement Excellence Award',
  'Startup & Research Friendly Campus Award',
  'Sustainable Campus Excellence Award',
  'Emerging Technology Leadership Center Award',
  'Alumni Relations & Impact Excellence Award',
  'Global Ranking Performance Excellence Award',
  'Research-Intensive University Award',
  'International Student Support Excellence Award',
];

const manufacturingAwards = [
  'Smart Manufacturing Innovation Excellence Award',
  'Industry 4.0 Transformation Leadership Award',
  'Industrial Automation Leadership Award',
  'Robotics & Autonomous Manufacturing Excellence Award',
  'Digital Twin & IoT Manufacturing Excellence Award',
  'Predictive Maintenance & Asset Intelligence Award',
  'AI-Driven Quality Control Excellence Award',
  'Industrial Cybersecurity Excellence Award',
  'Smart Supply Chain & Logistics Innovation Award',
  'Energy-Efficient Manufacturing Excellence Award',
  'Additive Manufacturing (3D Printing) Innovation Award',
  'Human–Machine Collaboration Excellence Award',
];

const softwareAwards = [
  'DevOps Transformation Excellence Award',
  'Agile & Scaled Agile Implementation Excellence Award',
  'Software Architecture Leadership Award',
  'Microservices & API Architecture Excellence Award',
  'Cloud-Native Application Development Excellence Award',
  'Secure Software Engineering Excellence Award',
  'High-Impact SaaS Product Excellence Award',
  'Enterprise Application Modernization Excellence Award',
  'Low-Code / No-Code Platform Innovation Award',
  'AI-Enabled Software Solutions Excellence Award',
  'Emerging Technology Solutions Excellence Award',
  'Blockchain-Based Software Innovation Award',
  'Quantum-Ready Software Architecture Award',
];

const sapAwards = [
  'SAP S/4HANA Cloud Innovation Excellence Award',
  'SAP Cloud Migration Excellence Award',
  'SAP Business Technology Platform Excellence Award',
  'SAP ERP Implementation Leadership Award',
  'SAP-Driven Business Process Optimization Excellence Award',
  'SAP Intelligent Enterprise Transformation Award',
  'SAP Analytics Cloud Excellence Award',
  'SAP Integration Suite Excellence Award',
  'SAP AI, ML & Joule Innovation Award',
  'SAP Industry Cloud Solutions Excellence Award',
  'SAP Digital Supply Chain Excellence Award',
  'SAP Finance Transformation Excellence Award',
  'SAP Human Capital Management (HCM) Excellence Award',
  'SAP Sustainability & Green Ledger Excellence Award',
];

const specialRecognitionAwards = [
  'Flagship Innovation Project Award',
  'Global Teaching Ambassador Award',
  'Knowledge Dissemination Excellence Award',
  'International Partnership Leadership Award',
  'Student Success Leadership Award',
  'Sustainable Development Goals Impact Excellence Award',
];


  const criteria = [
    {
      criterion: 'Original Contribution & Thought Leadership',
      focus: 'Novel ideas, intellectual depth, advancement of knowledge',
    },
    {
      criterion: 'Measurable Impact & Value Creation',
      focus: 'Demonstrated outcomes and real-world relevance',
    },
    {
      criterion: 'Technical Depth & Professional Excellence',
      focus: 'Rigor, quality, and domain expertise',
    },
    {
      criterion: 'Implementation Effectiveness',
      focus: 'Practical execution, efficiency, reliability',
    },
    {
      criterion: 'Leadership & Collaborative Approach',
      focus: 'Team building, partnerships, mentorship',
    },
    {
      criterion: 'Sustainability & Long-Term Relevance',
      focus: 'Scalability, continuity, future readiness',
    },
    {
      criterion: 'Ethical Conduct & Social Responsibility',
      focus: 'Responsible innovation and societal sensitivity',
    },
  ];

  const selectionSteps = [
    {
      title: 'Call for Nominations',
      description: 'Peer, advisory, or self-nomination from individuals, teams, institutions, and organizations',
      timeline: 'Ongoing',
    },
    {
      title: 'Initial Screening',
      description: 'Eligibility review and completeness verification',
      timeline: '2–3 Days',
    },
    {
      title: 'Expert Committee Evaluation',
      description: 'Comprehensive evaluation on innovation, impact, leadership, and global contribution',
      timeline: '10–12 Days',
    },
    {
      title: 'Final Review & Approval',
      description: 'Governance Council approval and ratification',
      timeline: '5–7 Days',
    },
  ];

  const categories = [
  { title: 'Academic Excellence & Leadership Awards', count: '18 Awards', awards: academicAwards },
  { title: 'Research, Innovation & Impact Awards', count: '18 Awards', awards: researchAwards },
  { title: 'Innovation & Entrepreneurship Awards', count: '16 Awards', awards: innovationAwards },
  { title: 'Academia–Industry Synergy Awards', count: '14 Awards', awards: academiaIndustryAwards },
  { title: 'Institutional Distinction Awards', count: '14 Awards', awards: institutionalAwards },
  { title: 'Artificial Intelligence & Advanced Technologies Awards', count: '19 Awards', awards: aiAwards },
  { title: 'Cloud, Data & Digital Platforms Awards', count: '16 Awards', awards: cloudAwards },
  { title: 'Manufacturing & Industry 4.0 Awards', count: '12 Awards', awards: manufacturingAwards },
  { title: 'Software & Enterprise Solutions Awards', count: '13 Awards', awards: softwareAwards },
  { title: 'SAP Cloud & Enterprise Digital Transformation Awards', count: '14 Awards', awards: sapAwards },
  { title: 'Special Recognition Awards', count: '6 Awards', awards: specialRecognitionAwards },
];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-druk mb-2">
              Call for Awards
            </h1>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Excellence in Research & Technology Awards
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Honoring researchers, academicians, and professionals who have demonstrated outstanding contributions
              in computational research, data analytics, and industrial applications. Awards will be conferred during the Valedictory Ceremony.
            </p>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 ">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Last Date for Nomination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-black">30th May 2026</p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-black">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Announcement of Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-black">30th June 2026</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-druk mb-2">Selection Process Overview</h2>
          <div className="w-24 h-1 bg-blue-600 mb-8"></div>
          <p className="text-lg text-gray-700 mb-12">
            A transparent, rigorous, and multi-stage evaluation framework ensures the highest standards of excellence
            and integrity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionSteps.map((step, index) => (
              <Card key={index} className="border border-gray-200 bg-amber-50 shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base text-black">{step.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm text-blue-600 font-semibold mt-2">
                    {step.timeline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-druk mb-2">Selection Criteria Framework</h2>
          <div className="w-24 h-1 bg-blue-600 mb-12"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {criteria.map((item, index) => (
              <Card key={index} className="border border-gray-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base text-black">{item.criterion}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Nominations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-druk mb-2">Call for Nominations</h2>
          <div className="w-24 h-1 bg-blue-600 mb-12"></div>
          <Card className="border border-gray-200 bg-amber-50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black">
                <Users className="w-6 h-6 text-blue-600" />
                Who Can Nominate?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Nominations are invited from individual professionals, research teams, higher education institutions,
                innovation centers, start-ups, corporate units, and incubators.
              </p>
              <div>
                <h4 className="font-semibold text-black mb-3">Nomination Sources:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Self-nomination</li>
                  <li>Peer or professional recommendation</li>
                  <li>Institutional leadership</li>
                  <li>Advisory Council recommendations</li>
                </ul>
              </div>
              <p className="text-gray-700 pt-2">
                <strong>Important:</strong> All nominations must be supported by verifiable documentation and evidence
                of contribution.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-druk mb-2">Award Categories</h2>
          <div className="w-24 h-1 bg-blue-600 mb-12"></div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 h-auto mb-8 bg-white border border-gray-200">
              {categories.map((category, index) => (
                <TabsTrigger key={index} value={index.toString()} className=" text-xs md:text-sm py-2 px-2 text-center whitespace-normal break-words leading-snug min-h-[48px] data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category, index) => (
              <TabsContent key={index} value={index.toString()}>
                <Card className="border border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-black">
                      <span>{category.title}</span>
                      <Badge variant="outline" className="text-gray-600 border-gray-300">{category.count}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {category.awards.length > 0 ? (
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.awards.map((award, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-3 bg-amber-50 rounded border border-gray-200">
                            <Award className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{award}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">Awards list coming soon</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Evaluation Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-druk mb-2">Detailed Evaluation Process</h2>
          <div className="w-24 h-1 bg-blue-600 mb-12"></div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="step1" className="border border-gray-200 rounded-lg px-4 bg-amber-50">
              <AccordionTrigger className="text-lg font-semibold text-black">
                Preliminary Review & Eligibility Check
              </AccordionTrigger>
              <AccordionContent className="space-y-3 text-gray-700">
                <p>
                  Each nomination undergoes an initial screening to verify eligibility, completeness, and relevance to
                  the selected award category.
                </p>
                <p>
                  Submissions lacking required documentation, failing eligibility norms, or falling outside the award
                  scope will not proceed further.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step2" className="border border-gray-200 rounded-lg px-4 bg-amber-50">
              <AccordionTrigger className="text-lg font-semibold text-black">Expert Scrutiny & Evaluation</AccordionTrigger>
              <AccordionContent className="space-y-3 text-gray-700">
                <p>
                  Eligible nominations are evaluated by an eminent jury of academicians, senior researchers, industry
                  leaders, policy advisors, and global domain experts.
                </p>
                <p>
                  Each criterion is evaluated independently to ensure a balanced assessment of academic merit, industry
                  relevance, and societal value.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step3" className="border border-gray-200 rounded-lg px-4 bg-amber-50">
              <AccordionTrigger className="text-lg font-semibold text-black">Consolidation & Final Recommendation</AccordionTrigger>
              <AccordionContent className="space-y-3 text-gray-700">
                <p>
                  Based on cumulative evaluations, a shortlist of high-ranking nominations is prepared. Scoring trends,
                  expert observations, and supporting evidence are carefully reviewed during final consolidation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step4" className="border border-gray-200 rounded-lg px-4 bg-amber-50">
              <AccordionTrigger className="text-lg font-semibold text-black">Final Approval & Ratification</AccordionTrigger>
              <AccordionContent className="space-y-3 text-gray-700">
                <p>
                  Final selections are ratified by the Awards Steering Committee comprising senior academicians,
                  industry veterans, and independent observers.
                </p>
                <p>
                  Only nominations demonstrating exceptional merit, credibility, and sustained impact are approved. The
                  committee reserves the right to withhold or reclassify awards if standards are unmet.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step5" className="border border-gray-200 rounded-lg px-4 bg-amber-50">
              <AccordionTrigger className="text-lg font-semibold text-black">Transparency & Integrity Assurance</AccordionTrigger>
              <AccordionContent className="space-y-3 text-gray-700">
                <p>
                  The selection process follows strict principles of fairness, confidentiality, and conflict-of-interest
                  management.
                </p>
                <p>Jury decisions are final and binding to preserve the prestige and integrity of the awards.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-druk mb-2">Recognition and Benefits</h2>
          <div className="w-24 h-1 bg-blue-600 mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Award className="w-5 h-5 text-blue-600" />
                  Official Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Official Certificate of Excellence</li>
                  <li>✓ Commemorative Plaque</li>
                  <li>✓ Public recognition during Valedictory Ceremony</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Target className="w-5 h-5 text-blue-600" />
                  Media & Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Feature on website</li>
                  <li>✓ Inclusion in proceedings</li>
                  <li>✓ Media coverage and announcements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Nominations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-druk mb-2">Open Nominations</h2>
          <div className="w-24 h-1 bg-blue-600 mb-12"></div>
          <Card className="border border-gray-200 bg-amber-50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-black">New Award Proposals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                To encourage inclusivity and innovation, nominators may also propose new award categories not listed
                above. Such nominations should be justified with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>A clear description of the award theme or focus area</li>
                <li>Rationale for its relevance to ICNCDA 2026 themes</li>
                <li>Evidence of achievement or contribution by the nominee</li>
              </ul>
              <p className="text-gray-700">
                All proposed awards will be reviewed and approved by the Awards Committee before formal recognition.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-druk mb-2">Ready to Nominate?</h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>
          <p className="text-lg text-gray-700 mb-8">
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/tnfTwxY7mb1LjFxy5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition">
                  Submit Nomination
                </button>
              </a>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition">
                Download Guidelines
              </button>
            </div>

        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-amber-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            <strong>ICNCDA 2026</strong> reaffirms its dedication to advancing innovation and collaboration in research
            and technology.
          </p>
        </div>
      </section>
    </div>
  );
}
