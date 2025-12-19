import React from 'react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PaperSubmission: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-8">Paper Submission</h1>
          
          <p className="font-graphik text-lg mb-6">
            The Original unpublished Research Papers, Articles & Working papers having minimum length of 8 pages on the topics related to the theme are invited for presentation/ publication in the conference proceedings.
          </p>
          
          <ol className="list-decimal pl-6 space-y-4 font-graphik">
            <li className="font-graphik">
              Kindly ensure that your paper is formatted as per Springer Guidelines (not exceeding 12 pages written in A4 size). Please refer the attached springer template for preparation of your paper.
            </li>
            <li className="font-graphik">
              All papers must be submitted online via <Link to={"https://cmt3.research.microsoft.com/ICNCDA2026"} className='text-blue-700 underline'>Microsoft CMT Submission Portal</Link>.
            </li>
            <li className="font-graphik">
              All submissions will be thoroughly peer-reviewed by experts based on originality, significance, and clarity.
            </li>
            <li className="font-graphik">
              Only papers presenting original content with novel research results or successful innovative applications will be considered for publication in the conference proceedings.
            </li>
          </ol>
          <br/><br/>
          <p className="font-publico">
            <b>Note: </b>The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
            This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
          <h2 className="font-druk text-2xl text-[#001324] mt-10 mb-4">Plagiarism Policy</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li className="font-graphik">
              The paper prior to submission should be checked for plagiarism from licensed plagiarism software like Turnitin / iAuthenticate etc. The similarity content should not exceed 15% (in any case either self contents or others). Further, you have to strictly implement the following ethical guidelines for publication:
            </li>
            <li className="font-graphik">
              Any form of self-plagiarism or plagiarism from others' work(s) should not be there in an article.
            </li>
            <li className="font-graphik">
              If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article, you should properly cite a reference to the original work.
            </li>
            <li className="font-graphik">
              Also language of explaining it should not be same as language of the work from which you have adopted it.
            </li>
            <li className="font-graphik">
              If you are using any copyrighted material, you should acquire prior permission from the copyright holder.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaperSubmission;
