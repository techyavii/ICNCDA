import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
    <footer className="bg-goldsmiths-text text-white py-8">
    <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
    {/* Conference Info */}
  <div>
  <h3 className="font-druk text-xl mb-4">ICNCDA 2026</h3>
  <p className="font-publico mb-2">
  International Conference on Networks, Computing Systems, and Data Analytics
  </p>
  <p className="font-publico text-sm">July 29-30, 2026</p>
  <p className="font-publico text-sm">University of Essex, England, UK</p>
  </div>

    {/* Contact Info */}
    <div>
    <h3 className="font-druk text-xl mb-4">Contact</h3>
    <div className="space-y-2">
        <div className="flex items-center">
          <Mail className="mr-2" size={16} />
          <div className="font-publico text-sm">
            <div>icncda@essex.ac.uk</div>
          </div>
        </div>
    <div className="flex items-center">
    <MapPin className="mr-2" size={16} />
    <span className="font-publico text-sm">University of Essex, Colchester, Essex, England, UK</span>
    </div>
    </div>
    </div>

    {/* Quick Links */}
    <div>
    <h3 className="font-druk text-xl mb-4">Quick Links</h3>
    <ul className="space-y-2 font-publico text-sm">
    <li><a href="/call-for-papers" className="hover:text-goldsmiths-yellow transition-colors">Call for Papers</a></li>
    <li><a href="/committee" className="hover:text-goldsmiths-yellow transition-colors">Committee</a></li>
    <li><a href="/registration" className="hover:text-goldsmiths-yellow transition-colors">Registration</a></li>
    <li><a href="/conference-venue" className="hover:text-goldsmiths-yellow transition-colors">Venue</a></li>
    </ul>
    </div>
    </div>

    <div className="border-t border-gray-600 mt-8 pt-8 text-center space-y-2">
          <p className="font-publico text-sm">&copy; 2026 ICNCDA. All rights reserved.</p>
    {/* <p className="font-publico text-sm">
    The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
    This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
    </p> */}
    </div>
    </div>
    </footer>
    );
    };

export default Footer;
