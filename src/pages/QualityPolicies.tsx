import React from 'react';
import Footer from '@/components/Footer';

const QualityPolicies: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-8">Quality Policies</h1>
          
          <p className="font-graphik text-lg mb-6">
            By submitting papers to ICNCDA 2026, authors are agreeing to the following terms and conditions of the conference.
            ICNCDA 2026 to follow Publication Ethics as laid out and followed by reputed international bodies/societies like COPE, Springer etc.
          </p>
          
          <div className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">DECLARATION BY THE AUTHORS</h2>
            <p className="font-graphik mb-4">
              By submitting papers to ICNCDA 2026, authors are making the following declarations -
            </p>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>The work that has been submitted to ICNCDA 2026 is the original work carried out by the author(s) of the paper.</li>
              <li>All the authors have made significant contribution in the reported work, as well as in writing the paper [Applicable if there are more than one author in the paper].</li>
              <li>The submitter/corresponding author declares that he/she has obtained the consents of all the co-authors before including their names in the paper [Applicable if there are more than one author in the paper].</li>
              <li>The paper is currently not under review for publication in any other conference or journal, and it will not be sent to any other conference or journal for consideration while it is under review in ICNCDA 2026.</li>
              <li>If the paper gets accepted after a review, one of the authors of the accepted paper will register and attend the conference and will make a presentation about work reported in the paper.</li>
              <li>I/we assure ICNCDA 2026 organizers that I/we will follow all the publication ethics of peer-reviewed conference.</li>
              <li>ICNCDA 2026 to follow Publication Ethics as laid out and followed by reputed international bodies/societies like COPE, Springer etc.</li>
            </ul>
          </div>
          
          <div className="mb-10">
            <h2 className="font-druk text-2xl text-[#001324] mb-4">RIGHTS OF THE CONFERENCE ORGANIZER (CO)</h2>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Assignments of papers for review is sole discretion of the Conference Organizer (CO).</li>
              <li>Decision on acceptance and rejection of the papers will solely be taken by the CO based on reviewers' comments.</li>
              <li>CO has full authority on preparing technical program of the conference and on scheduling papers for oral presentations.</li>
              <li>CO reserves the right to publish details of accepted papers (as well as that of authors) on the conference website and other related forums maintained by the CO.</li>
              <li>CO to have full authority regarding preponing/postponing dates of any event associated with the conference including but not limited to paper submission date, results announcement date, conference dates, proceeding publication date etc.</li>
              <li>Even after the acceptance and presentation of the papers in the conference, if some camera ready papers do not meet the quality standards in terms of technical content, English language, presentation and formatting of manuscripts as per the guidelines, then CO reserves the right not to include such papers in the proceedings.</li>
              <li>Photographs and videos taken during the conference will be freely used by the CO in multiple forums. By participating in the conference, authors/delegates by default give their consents to the CO to use their photographs and videos taken during the conference.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-druk text-2xl text-[#001324] mb-4">FINANCIAL OBLIGATIONS</h2>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>CO is not liable to refund the registration fee of the no-show papers.</li>
              <li>If any accepted paper is removed from the proceedings due to quality issues, then also CO is not liable to refund the fee.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QualityPolicies;
