import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';

const ImportantDatesModal: React.FC = () => {
  const importantDates = [
    { title: "Paper Submission Deadline", date: "March 30, 2026" },
    { title: "Acceptance Notification Due", date: "April 30, 2026" },
    { title: "Registration Due", date: "​May 29, 2026" },
    { title: "Camera Ready Submission", date: "June 10th, 2026" },
    { title: "Conference Dates", date: "July 29-30, 2026" }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-goldsmiths-blue text-black hover:bg-goldsmiths-blue/90 border-goldsmiths-blue rounded-r-lg rounded-l-none shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            width: '50px',
            height: '140px',
            padding: '12px 6px'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-sm font-semibold leading-tight text-center whitespace-nowrap">
              Important Dates
            </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-druk text-2xl text-goldsmiths-text text-center mb-4">
            Important Dates
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {importantDates.map((item, index) => (
            <div key={index} className="bg-goldsmiths-beige rounded-lg p-4 border border-goldsmiths-blue/20">
              <div className="flex justify-between items-center">
                <h3 className="font-graphik font-bold text-goldsmiths-text text-lg">
                  {item.title}
                </h3>
                <span className="font-publico text-goldsmiths-text bg-white px-3 py-1 rounded">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImportantDatesModal;
