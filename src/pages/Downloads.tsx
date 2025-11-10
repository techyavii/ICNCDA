
import React from 'react';
import Footer from '@/components/Footer';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Downloads = () => {
  const downloadItems = [
    {
      name: 'Checklist',
      link: 'https://res.cloudinary.com/da0yxppx2/image/upload/v1748602693/DASGRI%20adroid%20connectz/zfbh444d95upzrdjzym3.pdf',
      icon: <FileText className="mr-2" size={18} />
    },
    {
      name: 'Manuscript guidelines',
      link: 'https://res.cloudinary.com/da0yxppx2/image/upload/v1748602694/DASGRI%20adroid%20connectz/a53rrfp19k1xgj97rrxb.pdf',
      icon: <FileText className="mr-2" size={18} />
    },
    {
      name: 'Springer Word Template',
      link: 'https://resource-cms.springernature.com/springer-cms/rest/v1/content/19238648/data/v1',
      icon: <FileText className="mr-2" size={18} />
    },
    {
      name: 'Springer Latex Template',
      link: 'https://resource-cms.springernature.com/springer-cms/rest/v1/content/19238706/data/v1',
      icon: <FileText className="mr-2" size={18} />
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Downloads</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3 border-b">Resource</th>
                  <th className="text-right py-3 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {downloadItems.map((item, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4 flex items-center">
                      {item.icon}
                      {item.name}
                    </td>
                    <td className="py-4 text-right">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center"
                        asChild
                      >
                        <a href={item.link} download rel="noopener noreferrer">
                          <Download className="mr-1" size={16} />
                          Download
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Downloads;
