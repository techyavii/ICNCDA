import React from 'react';

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

const KeynoteSpeakers = () => {
  return (
    <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block text-3xl text-center">
            Keynote Speakers
          </h2>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">2026 Keynote Speaker</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {keynoteSpeakers2026.map((speaker, idx) => (
                <div key={`${speaker.name}-${idx}`} className="bg-white rounded-xl border hover:shadow-xl shadow-sm transition-all duration-300 p-6 flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden shadow-md bg-gray-100 mb-4">
                    <img src={speaker.profilePic} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{speaker.name}</h3>
                  <p className="text-gray-700 mt-1">{speaker.designation}</p>
                  {speaker.company && <p className="text-gray-600 text-sm mt-1">{speaker.company}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">2027 Keynote Speaker</h3>
            {keynoteSpeakers2027.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {keynoteSpeakers2027.map((speaker, idx) => (
                  <div key={`${speaker.name}-${idx}`} className="bg-white rounded-xl border hover:shadow-xl shadow-sm transition-all duration-300 p-6 flex flex-col items-center text-center">
                    <div className="w-36 h-36 rounded-full overflow-hidden shadow-md bg-gray-100 mb-4">
                      <img src={speaker.profilePic} alt={speaker.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{speaker.name}</h3>
                    <p className="text-gray-700 mt-1">{speaker.designation}</p>
                    {speaker.company && <p className="text-gray-600 text-sm mt-1">{speaker.company}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
                No keynote speakers announced for 2027 yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
