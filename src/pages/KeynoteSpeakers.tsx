import Footer from '@/components/Footer';
import KeynoteSpeakerCard from '@/components/KeynoteSpeakerCard';
import { useLocation } from 'react-router-dom';

const keynoteSpeakers2026 = [
  {
    name: 'Prof. Dhavalkumar (Dhaval) Thakker',
    designation: 'Professor of Artificial Intelligence and Internet of Things',
    company: 'University of Hull',
    profilePic: 'keynotes/dhaval_thakker.jpg',
  },
  {
    name: 'Prof. Hoang Nga Nguyen',
    designation: 'Associate Professor (Cybersecurity & Formal Methods)',
    company: 'Swansea University',
    profilePic: 'keynotes/hoang_nguyen.jpg',
  },
  {
    name: 'Prof. Sanjaya Kumar Panda',
    designation: 'Assistant Professor (CSE)',
    company: 'NIT Warangal',
    profilePic: 'keynotes/sanjaya_panda.jpg',
  },
  {
    name: 'Prof. Shivani Bali',
    designation: 'Professor',
    company: 'Jindal School of Banking & Finance, O.P. Jindal Global University, India',
    profilePic: 'keynotes/Shivani.jpeg',
  },
];

const keynoteSpeakers2027: typeof keynoteSpeakers2026 = [];

const renderSpeakerGrid = (speakers: typeof keynoteSpeakers2026) => (
  speakers.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {speakers.map((speaker, idx) => (
        <KeynoteSpeakerCard key={`${speaker.name}-${idx}`} {...speaker} />
      ))}
    </div>
  ) : (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
      No keynote speakers announced for 2027 yet.
    </div>
  )
);

const KeynoteSpeakers = () => {
  const location = useLocation();
  const isYearSpecificRoute = location.pathname.includes('2026') || location.pathname.includes('2027');
  const targetYear = location.pathname.includes('2027') ? '2027' : '2026';

  const renderYearSections = () => {
    if (isYearSpecificRoute) {
      const selectedSpeakers = targetYear === '2027' ? keynoteSpeakers2027 : keynoteSpeakers2026;
      return (
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">{targetYear} Keynote Speaker</h3>
          {renderSpeakerGrid(selectedSpeakers)}
        </div>
      );
    }

    return (
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">2026 Keynote Speaker</h3>
          {renderSpeakerGrid(keynoteSpeakers2026)}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">2027 Keynote Speaker</h3>
          {renderSpeakerGrid(keynoteSpeakers2027)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className="py-16 bg-[#f7faff]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-publico text-center text-gray-900 mb-10">
            Keynote Speaker
          </h2>

          {renderYearSections()}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default KeynoteSpeakers;
